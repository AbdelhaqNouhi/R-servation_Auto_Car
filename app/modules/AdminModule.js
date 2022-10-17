
const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema ({

    username: {
        type: String,
        require: [true, "please added a username"]
    },

    email: {
        type: String,
        require: [true, "please added a email"]
    },

    password: {
        type: String,
        require: [true, "please added password"]
    }
})

module.exports = mongoose.model('Admin', AdminSchema)