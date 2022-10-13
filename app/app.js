const express = require('express');

// init app & middlewere
const app = express();

const mongodb = require('mongodb');

const config = require('./config/db');
const PORT = 3000;
const client = mongodb.MongoClient;

client.connect(config.db, function (err, db) {
    if (!err) {
        console.log('connected!!')
    }
    else {
        console.log('database is not connected')
    }
});

app.get('/', function (req, res) {
    res.json({ "hello": "world" });
});

app.listen(PORT, function () {
    console.log('Your app is running on PORT:', PORT);
});