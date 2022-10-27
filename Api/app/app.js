const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/db')
const UserRouter = require('./router/UserRouter')
const AdminRouter = require('./router/AdminRouter')
const TicketRouter = require('./router/TicketRouter')
const TravelRouter = require('./router/TravelRouter')
const bodyParser = require ('body-parser')
const dotenv = require('dotenv').config()
const cors = require('cors')

const app = express();

app.use(cors())
app.use (bodyParser.json())
app.use('/api', UserRouter, AdminRouter, TicketRouter, TravelRouter)


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