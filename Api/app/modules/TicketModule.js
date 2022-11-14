const mongoose = require('mongoose')

const Ticket = mongoose.model(
    'Ticket',
    new mongoose.Schema({

        price: {
            type: String,
            required: [true, 'Please select price ?']
        },

        CreatedBy: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true
        },

        Travel:{
            type: mongoose.Types.ObjectId,
            ref: 'Travel',
            required: true
        }
    })
)
module.exports = Ticket