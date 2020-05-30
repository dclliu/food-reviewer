import React from 'react';
import './Main.css';
import BigSearchBar from '../BigSearchBar/BigSearchBar';
import {Link} from 'react-router-dom';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }
    render() {
        return (
            <div className="Main">
                <div className = "text-container">
                <Link className = "text" to = '/' style={{ textDecoration: 'none' }}>
                    <h1> food-reviewer </h1>
                    
                </Link>
                </div>
                <BigSearchBar/>
                
            </div>
        );
    }
    
}

export default Main;
