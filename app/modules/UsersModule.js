
const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model(
    "users",
    new mongoose.Schema({
        
        full_name: {
            type: String,
            required: [true, 'Please add a first name'],
        },

        email: {
            type: String,
            required: [true, 'Please add a email'],
            trim: true,
            lowercase: true,
            unique: true,
            validate(value) {
                return validator.isEmail(value);
            },
        },

        phone: {
        type: String,
        required: [true, 'Please add a phone number']
        },

        password: {
            type: String,
            required: true,
        },
        // ref basically means that mongoose would store the ObjectId values
        // and when you call populate using those ObjectIds would fetch and fill the documents for you.
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role",
            },
        ],
    })
);

module.exports = User;