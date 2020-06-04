import React from 'react';
import './BigSearchBar.css';
import { withRouter } from 'react-router-dom';

const apiKey = 'u5mrF79LEqZx7JFwOyifoKT2a3ILGvRE';

class BigSearchBar extends React.Component {
    constructor(props) {
		super(props);
		let initial = '';
		if(localStorage.getItem('initialLocation')) {
			initial = localStorage.getItem('initialLocation');
		}
		this.state = {
			term: '',
			location: '',
			initialLocation: ''
		};
		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
    }
    handleTermChange(e) {
	this.setState({term: e.target.value});
    }
    handleLocationChange(e) {
	this.setState({location: e.target.value});
	}
	handleSearch(e) {
		e.preventDefault();
		if(this.state.location === '') {
			this.setState({location: this.state.initialLocation});
			this.props.history.push(`/search?term=${this.state.term}&location=${this.state.initialLocation}`);
		} else {
			this.props.history.push(`/search?term=${this.state.term}&location=${this.state.location}`); //redirect url
		}
	}
    render() {
	return (
		<div >
			<form onSubmit = {this.handleSearch}>
				<div className = "BigSearchBar-fields">
					<input placeholder = "Search by business" onChange = {this.handleTermChange}/>
					<input placeholder = "Enter location"  onChange = {this.handleLocationChange}/>
				</div>
				<div className = "BigSearchBar-submit">
					<input type = 'submit' value = 'Search'/>
				</div>
			</form>
	    </div>
	);
	}
	
	async componentDidMount() { //fetch location from mapquest api
		if(navigator.geolocation) {
			try {
				await navigator.geolocation.getCurrentPosition((pos) => {
					const lat = pos.coords.latitude;
					const long = pos.coords.longitude;
					return fetch(`https://www.mapquestapi.com/geocoding/v1/reverse?key=${apiKey}&location=${lat}%2C${long}&outFormat=json&thumbMaps=false`)
					.then(handleErrors)
					.then(jsonResponse => {
						
						const city = jsonResponse.results[0].locations[0].adminArea5;
						const state = jsonResponse.results[0].locations[0].adminArea3;
						const country = jsonResponse.results[0].locations[0].adminArea1;
						return `${city}, ${state}, ${country}`;
					})
					.then(location => {
						this.setState({location: location, initialLocation: location});
						localStorage.setItem('initialLocation', location);
					})
					.catch(error => {
						console.log(error);
						return {};
					});
				});	
			} catch (error){
				console.error(error);
			}
		}
	}
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
}


export default withRouter(BigSearchBar);
