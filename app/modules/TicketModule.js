const mongoose = require('mongoose')

const Ticket = mongoose.model(
    'Ticket',
    new mongoose.Schema({

        user: User,

        travel: [
            {
                type: mongoose.Types.ObjectId,
                ref: 'Travel'
            }
        ]
    })
)
module.exports = Ticket