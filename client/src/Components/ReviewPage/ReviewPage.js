import React from 'react';
import Restaurant from '../Restaurant/Restaurant';
import './ReviewPage.css';
import SmallSearchBar from '../SmallSearchBar/SmallSearchBar';
import Yelp from '../../util/Yelp';
import ReviewForm from '../ReviewForm/ReviewForm';
import Review from '../Review/Review';  

let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let id = urlParams.get('id');

class ReviewPage extends React.Component {
    constructor(props) {
        super(props);
        let str = localStorage.getItem("new-tab-data");
        if(str) {
            console.log('foundin local storage');
            let res = JSON.parse(str);
            this.state = {
                restaurant: res,
                isLoading: false,
                reviews: []
            }
            localStorage.removeItem("new-tab-data");
        } else {
            this.state = {
                restaurant: '',
                isLoading: false,
                reviews: []
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {

        return;
    }
    render() {
        return (
            <div className = "Review-page">
                
                <SmallSearchBar/>
                <div className = "row">
                    <div className = "Restaurant-display">
                    
                        {this.state.isLoading ? <h1> Loading... </h1> : 
                            <Restaurant restaurant = {this.state.restaurant} hasClick = {false}/>
                        }
                        
                    </div>
                    <div className = "Form-display"><ReviewForm restaurantId = {id}/></div>
                </div>
                <h1>List of reviews:</h1>
                {this.state.reviews.length ? this.state.reviews.map(rev => {
                    return <Review review = {rev} key = {rev.review_id}/>
                }) : <h1>No reviews yet!</h1>
                }
                
            </div>
        );
    }
/*
                {this.state.reviews && this.state.reviews.map(rev => {
                    return <Review review = {rev} key = {rev.id}/>
                })}
                */
    componentDidMount() {
        if(this.state.restaurant === '') {
            this.setState({isLoading: true});
            Yelp.searchById(id).then(restaurants => {
                this.setState({restaurant: restaurants, isLoading: false});
            });
        }

        fetch(`/review/restaurantId/${id}`)
        .then(res => {
            return res.json()
            })
        .then(reviews => { 
            console.log(reviews); 
            this.setState({reviews: reviews});
        })
        .catch(error => console.log(error));
            
        
    }
    
}


export default ReviewPage;