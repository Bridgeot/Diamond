// require dependencies
const express = require('express');
const review = require('./controllers/review');
const cors = require('cors');

// initialize express application
const app = express();

// configure application settings
require('dotenv').config();
require('./config/database');

// mount middlware
app.use(express.json());
app.use(cors());

// mount routes

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.get('/reviews', review.fetchReviews);
app.get('/reviews/:id', review.fetchReview);
app.post('/reviews', review.createReview);
app.put('/reviews/:id', review.updateReview);
app.delete('/reviews/:id', review.deleteReview);

// tell the application to listen for requests
const port = process.env.PORT || 3001;
app.listen(port, function() {
    console.log(`Express app is running on port:${port}`);
});
