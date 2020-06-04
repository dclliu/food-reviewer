import React from 'react';
import './ReviewForm.css';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dish_name: '',
            dish_rating: '',
            dish_description: '',
            dish_img_path: '',
            user: '',
            errors: false
        }
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleUserChange=this.handleUserChange.bind(this);
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
    handleUserChange(e) {
        this.setState({user: e.target.value});
    }
    handleSubmit(e) { //send a POST request to /review (add it to the database)
        this.setState({errors: false});
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;

        const body = {
            review_id: 0,
            restaurant_id: this.props.restaurantId,
            user_id: this.state.user,
            review_date: today,
            dish_name: this.state.dish_name,
            dish_rating: this.state.dish_rating,
            dish_description: this.state.dish_description,
            dish_img_path: this.state.dish_img_path
        };
        
        
        fetch('/review', {
            method: "post",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        }).then(res => {
            if(res.status != 200) {
                this.setState({errors: true});
            }
            return res.json();

        }).then( json => {
                if(!this.state.errors) {
                    window.location.reload(false);
                }
            }
        ) 
        .catch(err => {
            console.log(err);
        });
        e.preventDefault();
    }
    render() {
        return (    
            <div className = "Review-Form">
                <h1>Review a dish!</h1>
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <input id = "name" placeholder = "Name of dish" onChange = {this.handleNameChange}/>
                        <input id = "user" placeholder = "Your name" onChange = {this.handleUserChange}/>
                        <input id = "rating" placeholder = "Rating (out of 5)" onChange = {this.handleRatingChange}/>
                        <textarea id = "description" placeholder = "How was it?" onChange = {this.handleDescriptionChange}/>
                    </div>
                    <div>
                        <input id = "submit" type = 'submit' value = 'Post'/>
                        {this.state.errors && <h4>Error in submitting form</h4>}
                    </div>
                </form>
            </div>
        );
    }
}


export default ReviewForm;