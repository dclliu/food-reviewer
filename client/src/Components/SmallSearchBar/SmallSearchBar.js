import React from 'react';
import './SmallSearchBar.css';
import { Link, withRouter } from 'react-router-dom';
import MapQuest from '../../util/MapQuest';

const apiKey = 'u5mrF79LEqZx7JFwOyifoKT2a3ILGvRE';

class SmallSearchBar extends React.Component {
    constructor(props) {
		super(props);
		let initial = '';
		if(localStorage.getItem('initialLocation')) {
			initial = localStorage.getItem('initialLocation');
		}
		let queryString = window.location.search;
		let urlParams = new URLSearchParams(queryString);
		let term = '';
		if(urlParams.has('term')) {
			term = urlParams.get('term');
		}
		let location = '';
		if(urlParams.has('location')) {
			location = urlParams.get('location');
		}
		this.state = {
			term: term,
			initialLocation: initial,
			location: location
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
		window.location.reload(false);
	}
    render() {
		return (
			<div className = "SmallSearchBar-container">
				<div className = "bar-container">
				<Link className = "logo-container" to = '/' style={{ textDecoration: 'none' }}>
					<div className = "logo-text">
						<h3> food-reviewer </h3>
					</div>
				</Link>
				<form onSubmit = {this.handleSearch}>
					<div >
						<input className = "SmallSearchBar-fields" placeholder = "Search by business" value = {this.state.term} onChange = {this.handleTermChange}/>
						<input className = "SmallSearchBar-fields" placeholder = "Enter location" value = {this.state.location} onChange = {this.handleLocationChange} />
						<input className = "SmallSearchBar-submit" type = 'submit' value = 'Search'/>
					</div>
				</form>
				</div>
			</div>
		);
	}
	
	

}


function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
}



export default withRouter(SmallSearchBar);
