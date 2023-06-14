const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    title: String,
    rating: String,
    body: String,
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
