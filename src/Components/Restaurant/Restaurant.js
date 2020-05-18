import React from 'react';
import './Restaurant.css';

class Restaurant extends React.Component {
    render() {
	return (
		<div className = "Restaurant" className = "container" style = {{height: "300px"}}>
		<div className = "row align-items-center">
		<div className = "image-container" className = "col-sm-3">
		<img className = "img-thumbnail rounded" src = {this.props.restaurant.imageSrc} alt = ''/>
		</div>
		<div className = "Restaurant-name" className = "col-sm-3" >
		<h1> {this.props.restaurant.name} </h1>
		<h4> {this.props.restaurant.category}</h4>
		</div>
		<div className = "Restaurant-info" className = "col-sm-3">
		<h3> {this.props.restaurant.address}</h3>
		<h3> {this.props.restaurant.city}, {this.props.restaurant.state}, {this.props.restaurant.zipCode}</h3>
		
		</div>
		<div className = "Review-info" className = "col-sm-3">
		<h3> Average rating: {this.props.restaurant.rating}/5 </h3>
		<h3> {this.props.restaurant.reviewCount}  reviews made</h3>
		</div>
	    </div>
	    </div>
	);
    }
}


export default Restaurant;
