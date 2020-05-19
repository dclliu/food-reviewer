import React from 'react';
import './App.css';
import RestaurantList from '../RestaurantList/RestaurantList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

//import 'bootstrap/dist/css/bootstrap.min.css';
/*
const restaurantPlaceholder = {
    imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'Restaurant Name',
    address: 'Restaurant St Address',
    city: 'Restaurant City',
    state: 'Restaurant State',
    zipCode: 'Restaurant Zip Code',
    category: 'Restaurant Category',
    rating: 5.0,
    reviewCount: 100
};

const restaurantArray = [
    restaurantPlaceholder,
    restaurantPlaceholder,
    restaurantPlaceholder,
    restaurantPlaceholder,
    restaurantPlaceholder,
    restaurantPlaceholder
];
*/
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {restaurants: []}; //initialize restaurants to empty array
        this.searchYelp = this.searchYelp.bind(this);
    }
    searchYelp(term, location) {
        Yelp.search(term, location).then(restaurants => {
            this.setState({restaurants: restaurants});
        });
    }
    render() {
        return (
            <div className="App">
                <h1> food-reviewer </h1>
                <SearchBar handleSearch = {this.searchYelp}/>
                <RestaurantList restaurants={this.state.restaurants} />
            </div>
        );
    }
}

export default App;
