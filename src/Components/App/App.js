import React from 'react';
import './App.css';
import Restaurant from '../Restaurant/Restaurant';
import RestaurantList from '../RestaurantList/RestaurantList';

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

class App extends React.Component {
    render() {
	return (
		<div className="App">
		<h1> food-reviewer </h1>
		<RestaurantList restaurants = {restaurantArray} />
		</div>
	);
    }
}

export default App;
