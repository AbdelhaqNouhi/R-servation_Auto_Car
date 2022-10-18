const mongoose = require('mongoose')

const Ticket = mongoose.model(
    'Ticket',
    new mongoose.Schema({

        user_id: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },

        travel_id:{
            type: mongoose.Types.ObjectId,
            ref: 'Travel'
        }
    })
)
module.exports = Ticket