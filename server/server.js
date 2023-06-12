const express = require('express');
const cors = require('cors');
const reviewController = require('./controllers/review');

const app = express();

app.use(cors());

require('dotenv').config();
require('./config/database');

app.get('/reviews', reviewController.fetchReviews);
app.get('/reviews/:id', reviewController.fetchReview);
app.post('/reviews', reviewController.createReview);
app.delete('/reviews/:id', reviewController.deleteReview);

const port = process.env.PORT || 3001;
app.listen(port, function() {
    console.log(`Express app is running on port:${port}`);
});
