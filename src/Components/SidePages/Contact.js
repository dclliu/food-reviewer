import React from 'react';
import SmallSearchBar from '../SmallSearchBar/SmallSearchBar';
import './About.css'

class Contact extends React.Component {
    render() {
        return (
            <div className = "SidePage">
                <SmallSearchBar />
                <div className = "container">
                    <div className = "box">
                    <p> You can reach me through: </p>
                    <ul>
                        <li>dclliu@gmail.com</li>
                        <li><a href = "https://www.linkedin.com/in/dclliu" target = "_blank" >LinkedIn</a></li>
                        
                    </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;