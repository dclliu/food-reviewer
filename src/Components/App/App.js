import React from 'react';
import './App.css';
import Main from '../Main/Main';
import SearchResults from '../SearchResults/SearchResults';
import ReviewPage from '../ReviewPage/ReviewPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            
            <Router>
                <div className = "header">
                    <ul>
                        <li><Link to = '/'>Home</Link></li>
                        <li><Link to = 'about'> About </Link></li>
                        <li><Link to = 'contact'>Contact</Link></li>
                    </ul>
                </div>
                <Switch>
                    <Route path = '/about'><About/></Route>
                    <Route path = '/contact'><Contact/></Route>
                    <Route path = '/search'><SearchResults /></Route>
                    <Route path = '/restaurant'><ReviewPage /></Route>
                    <Route path = ''> <Main/> </Route>
                    
                </Switch>
            </Router>
        );
    }
}

export default App;

const About = () => {
    return (
        <h1> this is the about page </h1>
    );
}

const Contact = () => {
    return (
        <h1> this is the contact page </h1>
    );
}