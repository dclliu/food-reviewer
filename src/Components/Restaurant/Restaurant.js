import React from 'react';
import './Restaurant.css';

class Restaurant extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e) {
		let str = JSON.stringify(this.props.restaurant);
		localStorage.setItem("new-tab-data", str);
		window.open(`/restaurant?id=${this.props.restaurant.id}`,"_blank"); //open review page in new tab
	}
	render() {
		
		return (
			<div className="Restaurant" >
				
					<div className="image-container">
						{this.props.hasClick ? 
						<img src={this.props.restaurant.imageUrl} alt='' onClick = {this.handleClick} className = "clickable-img"/>
						:<img src={this.props.restaurant.imageUrl} alt=''/>
					}
					</div>
					<div className = "Info-text">
						<div className="Restaurant-name"  >	
							{this.props.hasClick ?	
							<h1 onClick = {this.handleClick} className = "clickable-h1"> {this.props.restaurant.name}</h1>
							: <h1> {this.props.restaurant.name}</h1>
							}
						</div>
						<div className="Restaurant-info">
							<h4> {this.props.restaurant.category}</h4>
							<h3> {this.props.restaurant.address1}</h3>
							<h3> {this.props.restaurant.city}, {this.props.restaurant.state}, {this.props.restaurant.zipCode}</h3>
						</div>
						<div className="Review-info" >
							<h3> Average Yelp rating: {this.props.restaurant.rating}/5 </h3>
							<h3> {this.props.restaurant.reviewCount}  reviews made</h3>
						</div>
					</div>
			</div>
		);
	}
}


export default Restaurant;
