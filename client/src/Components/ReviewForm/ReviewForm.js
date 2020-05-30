import React from 'react';
import './ReviewForm.css';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (    
            <div className = "Review-Form">
                <h1>Write a review</h1>
                <form onSubmit = {() => {}}>
                    <div>
                        <input id = "name" placeholder = "dish name"/>
                        <input id = "rating" placeholder = "dish rating"/>
                        <textarea id = "description" placeholder = "dish description" />
                    </div>
                    <div>
                        <input type = 'submit' value = 'submit review'/>
                    </div>
                </form>
            </div>
        );
    }
}


export default ReviewForm;