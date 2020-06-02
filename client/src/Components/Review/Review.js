import React from 'react';
import './Review.css';
/*
NEEDS:

dish name
dish rating
dish description
date
(photo)
(user and user info)
(upvotes and downvotes)
*/


class Review extends React.Component {
    render() {
        return (
            <div className = "Review">
                <h3>User: {this.props.review.user_id}</h3>
                <h1>Dish name: {this.props.review.dish_name}</h1>
                <h1>Rating: {this.props.review.dish_rating}</h1>
                <h1>{this.props.review.dish_description}</h1>
                <h3>Date: {this.props.review.review_date}</h3>
            </div>
        );
    }
}

export default Review;