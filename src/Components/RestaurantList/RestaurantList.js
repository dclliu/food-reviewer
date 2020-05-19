import React from 'react';
import './RestaurantList.css';
import Restaurant from '../Restaurant/Restaurant';

class RestaurantList extends React.Component {
    render() {
	return (
	    this.props.restaurants.map(restaurant => {
		return <Restaurant restaurant = {restaurant} key = {restaurant.id}/>;
	    })
	);
    }
}

export default RestaurantList;
