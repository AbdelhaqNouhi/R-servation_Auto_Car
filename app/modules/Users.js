
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = Schema({

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
        type: Number,
        required: true
        // default:
    },

    password: {
        type: String,
        required: true
        // default:
    },
});

module.exports = mongoose.model('users.m', UserSchema)