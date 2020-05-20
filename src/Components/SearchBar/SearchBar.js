import React from 'react';
import './SearchBar.css';
import {Redirect} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    term: '',
		location: ''
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
		this.props.handleSearch(this.state.term, this.state.location);
		e.preventDefault();
		this.props.history.push(`/search?term=${this.state.term}&location=${this.state.location}`); //redirect url
	}
    render() {
	return (
		<div className = "SearchBar" className = "container">
			<form onSubmit = {this.handleSearch}>
				<input placeholder = "Search by business" onChange = {this.handleTermChange}/>
				<input placeholder = "Search by location" onChange = {this.handleLocationChange}/>
				<input type = 'submit' value = 'Search'/>
			</form>
	    </div>
	);
    }
}


export default withRouter(SearchBar);
