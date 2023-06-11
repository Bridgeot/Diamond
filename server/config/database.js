const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
// provide info about connection of database

db.on('connected', () => {
    // allows event listeners to be registered for various mongoose related events
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});
