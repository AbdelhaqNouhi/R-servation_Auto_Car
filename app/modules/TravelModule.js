const mongoose = require('mongoose')

const Travel = mongoose.model(
    'Travel',
    new mongoose.Schema ({

        from: {
            type: String,
            required: [true, 'Please select from ?']
        },

        to: {
            type: String,
            required: [true, 'Please select where to go ?']
        },

        departure_time: {
            type: Number,
            required: [true, 'Please select time ?']
        },

        departure_date: {
            type: Date,
            required: [true, 'Please select date ?']
        },

        arrival_time: {
            type: Date,
            required: [true, 'Please select time arrival ?']
        },

        arrival_date: {
            type: Date,
            required: [true, 'Please select date arrival ?']
        },

        seat_total: {
            type: Number,
            required: [true, 'Please select seat total ?'] 
        },

        reserved_seat: {
            type: Number,
            required: [true, 'Please select reserved_seat  ?']
        },

        price: {
            type: Number,
            required: [true, 'Please select price ?']
        },

        Ticket_id: [
            {
                type: mongoose.Types.ObjectId,
                ref: 'Ticket'
            }
        ],
    })
)

module.exports = Travel;