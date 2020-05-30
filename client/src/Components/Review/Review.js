import React from 'react';

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
            <div>
                <h1>id: {this.props.review.id}</h1>
                <h1>name: {this.props.review.name}</h1>
                <h1>dishname: {this.props.review.dishname}</h1>
                <h1>dishrating: {this.props.review.dishrating}</h1>
                <h1>dishbody: {this.props.review.dishbody}</h1>
            </div>
        );
    }
}

export default Review;