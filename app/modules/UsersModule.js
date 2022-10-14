
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    first_name: {
        type: String,
        required: true
        // default:
    },

    last_name: {
        type: String,
        required: true
        // default:
    },

    email: {
        type: String,
        required: true
        // default:
    },

    phone: {
        type: String,
        required: true
        // default:
    },

    password: {
        type: String,
        required: true
        // default:
    },
});

module.exports = mongoose.model('Users', UserSchema)