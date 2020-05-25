import React from 'react';
import './Main.css';
import BigSearchBar from '../BigSearchBar/BigSearchBar';

class Main extends React.Component {

    render() {
        return (
            <div className="Main">
                <h1> food-reviewer </h1>
                <h1> main page </h1>
                <BigSearchBar handleSearch = {() => {}}/>
            </div>
        );
    }
}

export default Main;
