const apiKey = ''; //enter your own yelp api key

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

const Yelp = {
    search(term, location) {
        console.log(`term is ${term}, location is ${location}`);
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`
        , {headers: {Authorization: `Bearer ${apiKey}`}})
        .then(handleErrors)
        .then(jsonResponse => {
            if(jsonResponse.businesses) {
                console.log('yelp search successful');
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
                    console.log('unsuccessful');
                //ReactDOM.render(<h1> empty </h1>,document.getElementById('app'));
                return [];
            }
        }).catch(error => {
            console.log(error);
            return [];
        });

    }

}

export default Yelp;
