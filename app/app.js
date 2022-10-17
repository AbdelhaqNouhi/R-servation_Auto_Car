const express = require('express');
const mongoose = require('mongoose')
const config = require('./config/db');
const Router = require('./router/UserRouter');
const bodyParser = require ('body-parser')
const dotenv = require('dotenv').config()

const app = express();

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


app.listen(process.env.PORT, function () {
    console.log('Your app is running on PORT:', process.env.PORT);
});