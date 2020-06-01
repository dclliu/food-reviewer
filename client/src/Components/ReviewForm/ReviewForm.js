import React from 'react';
import './ReviewForm.css';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dish_name: '',
            dish_rating: '',
            dish_description: '',
            dish_img_path: ''
        }
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleRatingChange=this.handleRatingChange.bind(this);
        this.handleDescriptionChange=this.handleDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleNameChange(e) {
        this.setState({dish_name: e.target.value});
    }
    handleRatingChange(e) {
        this.setState({dish_rating: e.target.value});
    }
    handleDescriptionChange(e) {
        this.setState({dish_description: e.target.value});
    }
    handleSubmit(e) { //send a POST request to /review (add it to the database)
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;

        const body = {
            review_id: 0,
            restaurant_id: this.props.restaurantId,
            user_id: 'dclliu',
            review_date: today,
            dish_name: this.state.dish_name,
            dish_rating: this.state.dish_rating,
            dish_description: this.state.dish_description,
            dish_img_path: this.state.dish_img_path
        };
        console.log(body);
        
        fetch('/review', {
            method: "post",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        }).then(res => res.json())
        .then(json => console.log(json))
        .then(window.location.reload(false))
        .catch(err => console.log(err));

        e.preventDefault();
    }
    render() {
        return (    
            <div className = "Review-Form">
                <h1>Write a review</h1>
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <input id = "name" placeholder = "dish name" onChange = {this.handleNameChange}/>
                        <input id = "rating" placeholder = "dish rating" onChange = {this.handleRatingChange}/>
                        <textarea id = "description" placeholder = "dish description" onChange = {this.handleDescriptionChange}/>
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