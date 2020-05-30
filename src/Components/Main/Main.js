import React from 'react';
import './Main.css';
import BigSearchBar from '../BigSearchBar/BigSearchBar';
import {Link} from 'react-router-dom';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
    }
    render() {
        return (
            <div className="Main">
                <div className = "text-container">
                <Link className = "text" to = '/' style={{ textDecoration: 'none' }}>
                    <h1> aaaafood-reviewer </h1>
                    <h1>data is {this.state.data}</h1>
                    <h1>abcd</h1>
                </Link>
                </div>
                <BigSearchBar/>
                
            </div>
        );
    }
    componentDidMount() {
        fetch('http://localhost:9000/')
        .then(data => this.setState({data: data}));
    }
}

export default Main;
