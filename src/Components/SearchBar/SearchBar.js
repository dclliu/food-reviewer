import React from 'react';
import './SearchBar.css';

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
	}
    render() {
	return (
		<div className = "SearchBar" className = "container">
		<div className = "Search-fields" className = "row justify-content-center">
		<div>
		<input placeholder = "Search by business" onChange = {this.handleTermChange}/>
		</div>
		<div>
		<input placeholder = "Search by location" onChange = {this.handleLocationChange}/>
		</div>
		</div>
		<div className = "row justify-content-center" >
		<button type="button" className = "btn btn-primary" onClick = {this.handleSearch}>
		Search
		</button>
		</div>
	    </div>
	);
    }
}


export default SearchBar;
