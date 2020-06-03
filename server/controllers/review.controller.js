const Review = require("../models/review.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    console.log('REVIEW CREATE');
    // Create a review
    const review = new Review({
      review_id : req.body.review_id,
      restaurant_id : req.body.restaurant_id,
      user_id : req.body.user_id,
      review_date : req.body.review_date ,
      dish_name : req.body.dish_name ,
      dish_rating : req.body.dish_rating ,
      dish_description : req.body.dish_description ,
      dish_img_path : req.body.dish_img_path
    });
  
    // Save review in the database
    Review.create(review, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        });
      else res.send(data);
    });
  };

// Retrieve all reviews from the database.
exports.findAll = (req, res) => {
    Review.getAll((err, data) => {
        console.log('REVIEWS FINDALL');
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };

  exports.findOne = (req, res) => {
    Customer.findById(req.params.customerId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Customer with id " + req.params.customerId
          });
        }
      } else res.send(data);
    });
  };

// Find a single review with a reviewId
exports.findByReviewId = (req, res) => {
  Review.findByReviewId(req.params.reviewId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found review with id ${req.params.reviewId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving review with id " + req.params.reviewId
        });
      }
    } else res.send(data);
  });
};

exports.findByRestaurantId = (req, res) => {
  Review.findByRestaurantId(req.params.restaurantId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found reviews with restaurant id ${req.params.restaurantId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving reviews with restaurant id " + req.params.restaurantId
        });
      }
    } else res.send(data);
  });
};

exports.findByUserId = (req, res) => {
  Review.findByUserId(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found reviews with user id ${req.params.userId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving reviews with user id " + req.params.userId
        });
      }
    } else res.send(data);
  });
};


// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
  
};