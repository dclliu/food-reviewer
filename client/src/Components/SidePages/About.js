import React from 'react';
import SmallSearchBar from '../SmallSearchBar/SmallSearchBar';
import './About.css'

class About extends React.Component {
    render() {
        return (
            <div className = "SidePage">
                <SmallSearchBar />
                <div className = "container">
                    <div className = "box">
                    <p> Website made by Daniel Liu, undergraduate Yale 2023. 
                    App utilizes Yelp API and MapQuest API.</p>
                    <p> Please see the contact page for questions/suggestions. </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;