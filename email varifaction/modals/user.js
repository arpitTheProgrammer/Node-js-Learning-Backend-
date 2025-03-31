const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    varificationCode: {
        type: String
    }
}, {timestamps: true})

const User = mongoose.model("User", userSchema)

module.exports = User;