import React from 'react';
import ReactDOM from 'react-dom';
const apiKey = 'l_V052s4yME-K4R0NxkXG70ZUaeDFjqpDj5FMFNv2mfhIfxytoTgTPobcN5bdijqpSwPd3CeG124Bp7_hBLaMJEF1GocsRAjaXfe50yMGjqQBMfxW-HV8PCJcezCXnYx'; //enter your own yelp api key


const Yelp = {
    search(term, location) {
        //window.location.assign('localhost:3000/search')
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`
        , {headers: {Authorization: `Bearer ${apiKey}`}})
        .then(response => {
            return response.json();
        })
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
                //ReactDOM.render(<h1> empty </h1>,document.getElementById('app'));
                return [];
            }
        });

    }

}

export default Yelp;
