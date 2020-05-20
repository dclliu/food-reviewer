import React from 'react';
import './Restaurant.css';

class Restaurant extends React.Component {
	render() {
		return (
			<div className="Restaurant" style={{ height: "300px" }}>
				<div>
					<div className="image-container">
						<img src={this.props.restaurant.imageUrl} alt='' />
					</div>
					<div className="Restaurant-name"  >
						<h1> {this.props.restaurant.name} </h1>
						<h4> {this.props.restaurant.category}</h4>
					</div>
					<div className="Restaurant-info">
						<h3> {this.props.restaurant.address1}</h3>
						<h3> {this.props.restaurant.city}, {this.props.restaurant.state}, {this.props.restaurant.zipCode}</h3>
					</div>
					<div className="Review-info" >
						<h3> Average rating: {this.props.restaurant.rating}/5 </h3>
						<h3> {this.props.restaurant.reviewCount}  reviews made</h3>
					</div>
				</div>
			</div>
		);
	}
}


export default Restaurant;
