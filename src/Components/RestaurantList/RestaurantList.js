import React from 'react';
import './RestaurantList.css';
import Restaurant from '../Restaurant/Restaurant';

class RestaurantList extends React.Component {
    render() {
	return (
		<div>
	    	{this.props.restaurants.map(restaurant => {
			return <Restaurant restaurant = {restaurant} key = {restaurant.id}/>;
	    	})}
		</div>
	);
    }
}

export default RestaurantList;
