var express = require('express');
var router = express.Router();
const review = require("../controllers/review.controller.js");

//Save a review
router.post("/", review.create);
  
// Retrieve all reviews
router.get("/", review.findAll);

// Retrieve a single review with reviewId
router.get("/reviewId/:reviewId", review.findByReviewId);

// Retrieve all reviews of a single restaurant
router.get("/restaurantId/:restaurantId", review.findByRestaurantId);

// Retrieve all reviews by a single user
router.get("/userId/:userId", review.findByUserId);
/*
// Update a Customer with customerId
router.put("/customers/:customerId", review.update);

// Delete a review with reviewId
router.delete("/reviewId/:reviewId", review.delete);

//Delete all reviews
router.delete("/", customers.deleteAll);
*/
module.exports = router;
