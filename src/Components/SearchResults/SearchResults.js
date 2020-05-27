import React from 'react';
import './SearchResults.css';
import RestaurantList from '../RestaurantList/RestaurantList';
import Yelp from '../../util/Yelp';
import SmallSearchBar from '../SmallSearchBar/SmallSearchBar';

const temporaryRestaurant = 
    {
    id: 'temporary',
    imageUrl: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'Restaurant Name',
    address1: 'Restaurant St Address',
    city: 'Restaurant City',
    state: 'Restaurant State',
    zipCode: 'Restaurant Zip Code',
    category: 'Restaurant Category',
    rating: 5.0,
    reviewCount: 100};

    let queryString = window.location.search;
        let urlParams = new URLSearchParams(queryString);
        let term = urlParams.get('term');
        let location = urlParams.get('location');


class SearchResults extends React.Component {

    constructor(props) {
        super(props);
        

        this.state = {
            restaurants: [],
            isLoading: false
        };
        this.searchYelp = this.searchYelp.bind(this);
    }

    searchYelp(term, location) {
        Yelp.search(term, location).then(restaurants => {
            this.setState({restaurants: restaurants});
        });
    }
    render() {
        return (
            <div className = "Search-results">
                <SmallSearchBar/>
                
                
                {!this.state.isLoading ? 
                <div>
                    <h1 id = "Header"> Top results in {location}:</h1>
                    <RestaurantList restaurants = {this.state.restaurants}/></div>
                    : <h1> Loading... </h1>}
            </div>
        );
    }

    componentDidMount() {
        this.setState({isLoading: true});

        let queryString = window.location.search;
        let urlParams = new URLSearchParams(queryString);
        let term = urlParams.get('term');
        let location = urlParams.get('location');
        Yelp.search(term, location).then(restaurants => {
            this.setState({restaurants: restaurants, isLoading: false});
        });
        /*
        cancelablePromise.then(restaurants => {
            this.setState({restaurants: restaurants, isLoading: false});
        });
        */
    }
    componentWillUnmount() {
        /*
        cancelablePromise.cancel();
        */
    }
}


/*
const makeCancelable = (promise) => {
    let hasCanceled_ = false;

    const wrappedPromise = new Promise((resolve, reject) => {
        promise.then(
            val => hasCanceled_ ? reject({isCanceled: true}) : resolve(val),
            error => hasCanceled_ ? reject({isCanceled: true}) : reject(error)
        );
    });

    return {
        promise: wrappedPromise,
        cancel() {
            hasCanceled_ = true;
        },
    };
};

let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let term = urlParams.get('term');
let location = urlParams.get('location');

const cancelablePromise = makeCancelable(Yelp.search(term, location));
*/
export default SearchResults;