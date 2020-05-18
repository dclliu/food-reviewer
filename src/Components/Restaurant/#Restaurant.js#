import React from 'react';
import './Restaurant.css';

class Restaurant extends React.Component {
    render() {
	return (
	<div className = "Restaurant">
		<div className = "image-container">
		<img src = {this.props.restaurant.imageSrc} alt = ''/>
		</div>
		<h1> {this.props.restaurant.name} </h1>
		<div className = "Restaurant-info">
		<h3> {this.props.restaurant.category}</h3>
		<h3> {this.props.restaurant.address}</h3>
		<h3> {this.props.restaurant.city}, {this.props.restaurant.state}, {this.props.restaurant.zipCode}</h3>
		
		</div>
		<div className = "Review-info">
		<h3> Average rating: {this.props.restaurant.rating}/5 </h3>
		<h3> {this.props.restaurant.reviewCount}  reviews made</h3>
	    </div>
	    </div>
	);
    }
}


export default Restaurant;
