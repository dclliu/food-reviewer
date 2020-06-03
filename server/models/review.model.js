const sql = require("./db.js");

// constructor
const Review = function(review) {
  this.review_id = 0;
  this.restaurant_id = review.restaurant_id;
  this.user_id = review.user_id;
  this.review_date = review.review_date ;
  this.dish_name = review.dish_name ;
  this.dish_rating = review.dish_rating ;
  this.dish_description = review.dish_description ;
  this.dish_img_path = review.dish_img_path ;
};

Review.create = (newReview, result) => {
  sql.query("INSERT INTO reviews SET ?", newReview, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created review: ", { id: res.insertId, ...newReview });
    result(null, { id: res.insertId, ...newReview });
  });
};

Review.findByReviewId = (reviewId, result) => {
  sql.query(`SELECT * FROM reviews WHERE review_id = ${reviewId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found review: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found review with the id
    result({ kind: "not_found" }, null);
  });
};

Review.findByRestaurantId = (restaurantId, result) => {
  const restaurant_id = "'"+restaurantId+"'";
  sql.query(`SELECT * FROM reviews WHERE restaurant_id = ${restaurant_id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res);
      return;
    }

    // not found review with the id
    result({ kind: "not_found" }, null);
  });
};

Review.findByUserId = (userId, result) => {
  const user_id = "'"+userId+"'";
  sql.query(`SELECT * FROM reviews WHERE user_id = ${user_id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res);
      return;
    }

    // not found review with the id
    result({ kind: "not_found" }, null);
  });
};


Review.getAll = result => {
  sql.query("SELECT * FROM reviews", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Reviews: ", res);
    result(null, res);
  });
};
/*
Review.updateById = (id, review, result) => {
  sql.query(
    "UPDATE reviews SET email = ?, name = ?, active = ? WHERE id = ?",
    [review.email, review.name, review.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Review with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated review: ", { id: id, ...review });
      result(null, { id: id, ...review });
    }
  );
};
*/
Review.remove = (id, result) => {
  sql.query("DELETE FROM reviews WHERE review_id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found review with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted review with id: ", id);
    result(null, res);
  });
};

Review.removeAll = result => {
  sql.query("DELETE FROM reviews", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} reviews`);
    result(null, res);
  });
};

module.exports = Review;
