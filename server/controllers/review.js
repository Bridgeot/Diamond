const Review = require('../models/review');

const fetchReviews = async (req, res) => {
    const reviews = await Review.find();

    res.json({ reviews });
};

const fetchReview = async (req, res) => {
    const reviewId = req.params.id;

    const review = await Review.findById(reviewId);

    res.json({ review });
};

const createReview = async (req, res) => {
    const { title, rating, body } = req.body;

    const review = await Review.create({
        title,
        rating,
        body,
    });

    res.json({ review });
};

const deleteReview = async (req, res) => {
    const reviewId = req.params.id;

    await Review.deleteOne({ _id: reviewId });

    res.json({ success: 'Record deleted' });
};

module.exports = {
    fetchReviews,
    fetchReview,
    createReview,
    deleteReview,
};
