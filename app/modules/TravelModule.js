const mongoose = require('mongoose')

const TravelSchema = mongoose.Schema ({

    from: {
        type: String,
        require: true
    },

    to: {
        type: String,
        require: true
    },

    departure_time: {
        type: time,
        require: true
    },

    departure_date: {
        type: Date,
        require: true
    },

    arrival_time: {
        type: Date,
        require: true
    },

    arrival_date: {
        type: Date,
        require: true
    },

    seat_total: {
        type: Number,
        require: true 
    },

    reserved_seat: {
        type: Number,
        require: true
    },

    price: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('Travel', TravelSchema)