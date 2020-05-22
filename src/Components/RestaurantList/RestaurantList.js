import React from 'react';
import './RestaurantList.css';
import Restaurant from '../Restaurant/Restaurant';

class RestaurantList extends React.Component {
    render() {
	return (
		<div>
			{this.props.restaurants.length > 0 ? 
			this.props.restaurants.slice(0,10).map(restaurant => {
			return <Restaurant restaurant = {restaurant} key = {restaurant.id} hasClick = {true}/>;
			})
			:
			<h1> No restaurants found. </h1>
		}
		</div>
	);
    }
}

export default RestaurantList;
