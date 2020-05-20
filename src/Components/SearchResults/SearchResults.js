import React from 'react';
import './SearchResults.css';
import Main from '../Main/Main';
import RestaurantList from '../RestaurantList/RestaurantList';
import Yelp from '../../util/Yelp';
import SearchBar from '../SearchBar/SearchBar';

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



class SearchResults extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurants: []
        };
        this.searchYelp = this.searchYelp.bind(this);
    }
    searchYelp(term, location) {
        
        Yelp.search(term, location).then(restaurants => {
            this.setState({restaurants: restaurants});
        });
        
       //this.setState({restaurants: [temporaryRestaurant]});
    }
    render() {
        let queryString = window.location.search;
        let urlParams = new URLSearchParams(queryString);
        let term = urlParams.get('term');
        let location = urlParams.get('location');
        this.searchYelp(term,location);
        return (
            <div className = "Search-results">
                <h1> search results page !</h1>
                <SearchBar handleSearch = {this.searchYelp} />
                <RestaurantList restaurants = {this.state.restaurants}/>
            </div>
        );
    }
}



export default SearchResults;