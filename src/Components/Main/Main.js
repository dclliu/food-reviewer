import React from 'react';
import './Main.css';
import BigSearchBar from '../BigSearchBar/BigSearchBar';

class Main extends React.Component {

    render() {
        return (
            <div className="Main">
                <div className = "text-container">
                <div className = "text">
                    <h1> food-reviewer </h1>
                    <h1> main page </h1>
                </div>
                </div>
                <BigSearchBar handleSearch = {() => {}}/>
            </div>
        );
    }
}

export default Main;
