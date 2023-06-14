const express = require('express');
const cors = require('cors');
const review = require('./controllers/review');

const app = express();

require('dotenv').config({ path: 'ENV_FILENAME' });
require('./config/database');

app.use(express.json());
app.use(cors());

app.get('/reviews', review.fetchReviews);
app.get('/reviews/:id', review.fetchReview);
app.post('/reviews', review.createReview);
app.delete('/reviews/:id', review.deleteReview);

const port = process.env.PORT || 3001;
app.listen(port, function() {
    console.log(`Express app is running on port:${port}`);
});
