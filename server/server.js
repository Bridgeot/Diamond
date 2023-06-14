// require dependencies
const express = require('express');
const cors = require('cors');
const review = require('./controllers/review');

// initialize express application
const app = express();

// configure application settings
require('dotenv').config();
require('./config/database');

// mount middlware
app.use(express.json());
app.use(cors());

// mount routes

app.get('/reviews', review.fetchReviews);
app.get('/reviews/:id', review.fetchReview);
app.post('/reviews', review.createReview);
app.delete('/reviews/:id', review.deleteReview);

const port = process.env.PORT || 3001;
app.listen(port, function() {
    console.log(`Express app is running on port:${port}`);
});
