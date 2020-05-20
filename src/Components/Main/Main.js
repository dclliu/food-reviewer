import React from 'react';
import './Main.css';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

class Main extends React.Component {

    render() {
        return (
            <div className="Main">
                <h1> food-reviewer </h1>
                <h1> main page </h1>
                <SearchBar handleSearch = {() => {}}/>
            </div>
        );
    }
}

export default Main;
