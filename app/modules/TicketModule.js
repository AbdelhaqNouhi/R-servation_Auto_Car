const mongoose = require('mongoose')

const Ticket = mongoose.model(
    'Ticket',
    new mongoose.Schema({

        // CreatedBy: {
        //     type: mongoose.Types.ObjectId,
        //     ref: 'User',
        //     required: true
        // },

        // travel_id:{
        //     type: mongoose.Types.ObjectId,
        //     ref: 'Travel'
        // }
    })
)
module.exports = Ticket