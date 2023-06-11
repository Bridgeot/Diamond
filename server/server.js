// require dependecies
const express = require('express');

// initialize the express app
const app = express();

// configure settings
require('dotenv').config();
require('./config/database');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// tell the app to listen
const port = process.env.PORT || 3001;
app.listen(port, function() {
    console.log(`Express app is running on port:${port}`);
});
