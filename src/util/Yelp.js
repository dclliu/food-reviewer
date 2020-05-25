const apiKey = 'iQ8pmLEK2Wg8SRHRxvyuCf64FT9gNDJgVZruzws5XGLHpNl3X3reTymr9964LJQR1MqsX8JY0katxpNhDi2gJsPRtq7WEoJvYg2VFd-yYd7jsHFg2XuUAW-PnZrFXnYx'; //enter your own yelp api key

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
}

const Yelp = {
    search(term, location) {
        console.log(`term is ${term}, location is ${location}`);
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`
        , {headers: {Authorization: `Bearer ${apiKey}`}})
        .then(handleErrors)
        .then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => (
                    {id: business.id,
                        phone: business.phone,
                        name: business.name,
                        url: business.url,
                        imageUrl: business.image_url,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        country: business.location.country,
                        address: business.location.address1,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }));
                } else {
                return [];
            }
        }).catch(error => {
            console.log(error);
            return [];
        });

    }

}

export default Yelp;
