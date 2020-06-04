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
                <h1>{this.props.review.dish_name}: {this.props.review.dish_rating}</h1>
                <h3>{this.props.review.dish_description}</h3>
                <h4>{this.props.review.user_id}, {this.props.review.review_date.slice(0,10)}</h4>
            </div>
        );
    }
}

export default Review;