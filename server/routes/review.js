const express = require('express');
const { fetchReviews, fetchReview, createReview, deleteReview } = require('../controllers/review');

const router = express.Router();

router.route('/reviews').get(fetchReviews);
router.route('/reviews/:id').get(fetchReview);
router.route('/reviews').post(createReview);
router.route('/reviews/:id').post(deleteReview);

module.exports = router;
