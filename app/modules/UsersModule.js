
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    first_name: {
        type: String,
        required: [true, 'Please add a first name']
        // default:
    },

    last_name: {
        type: String,
        required: [true, 'Please add a last name']
        // default:
    },

    email: {
        type: String,
        required: [true, 'Please add a email'],
        unique: true
        // default:
    },

    phone: {
        type: String,
        required: [true, 'Please add a phone number']
        // default:
    },

    password: {
        type: String,
        required: [true, 'Please add a password']
        // default:
    },
},
{
    timestamps: true
}); 

module.exports = mongoose.model('Users', UserSchema)