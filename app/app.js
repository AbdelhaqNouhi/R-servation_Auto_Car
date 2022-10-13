const express = require('express');
const mongodb = require('mongodb');
const app = express();
const config = require('./config/db');

// import routes
const usersRoute = require('./router/users')
app.use('/users', usersRoute)


const PORT = 3000;
const client = mongodb.MongoClient;

client.connect(config.db, (err, db) => {
    if (!err) {
        console.log('connected!!')
    }
    else {
        console.log('database is not connected')
    }
    console.log('db', db);
});

// app.get('/users', (req, res) => {
//     db.collection('users')
//     .find()
//     res.json({ "hello": "world" });
// });


app.listen(PORT, function () {
    console.log('Your app is running on PORT:', PORT);
});