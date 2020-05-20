import React from 'react';
import './Main.css';
import RestaurantList from '../RestaurantList/RestaurantList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

class Main extends React.Component {
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
            <div className="Main">
                <h1> food-reviewer </h1>
                <h1> main page </h1>
                <SearchBar handleSearch = {this.searchYelp}/>
                <RestaurantList restaurants={this.state.restaurants} />
            </div>
        );
    }
}

export default Main;
