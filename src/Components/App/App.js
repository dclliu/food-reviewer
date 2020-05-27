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
                
                <Switch>
                    <Route path = '/about'><About/></Route>
                    <Route path = '/contact'><Contact/></Route>
                    <Route path = '/search'><SearchResults /></Route>
                    <Route path = '/restaurant'><ReviewPage /></Route>
                    <Route exact path = '/'> <Main/> </Route>
                    
                </Switch>
                <div className = "footer">
                    <h4>2020 Daniel Liu</h4>
                    <div className = "links">
                    <ul>
                        <li><Link to = 'about'> About </Link></li>
                        <li><Link to = 'contact'>Contact</Link></li>
                    </ul>
                    </div>
                </div>
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