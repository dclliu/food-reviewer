import React from 'react';
import './RestaurantList.css';
import Restaurant from '../Restaurant/Restaurant';

class RestaurantList extends React.Component {
    render() {
		return (
			<div className = "Restaurant-List">
				{this.props.restaurants.length > 0 ? 
				this.props.restaurants.slice(0,20).map(restaurant => {
				return <div><Restaurant restaurant = {restaurant} key = {restaurant.id} hasClick = {true}/></div>;
				})
				:
				<h1> No restaurants found. </h1>}
			</div>
		);
    }
}

export default RestaurantList;
