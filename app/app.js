const express = require('express');
const mongoose = require('mongoose')
const config = require('./config/db');
const Router = require('./router/api');
const bodyParser = require ('body-parser')

const PORT = 3000;

const app = express();

// app.use (express.json())
app.use (bodyParser.json())
app.use('/api', Router)


mongoose.connect(config.db, (err, db) => {
    if (!err) {
        console.log('connected!!')
    }
    else {
        console.log('database is not connected')
    }
});


app.listen(PORT, function () {
    console.log('Your app is running on PORT:', PORT);
});