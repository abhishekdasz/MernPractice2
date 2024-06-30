const mongoose = require('express');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    isAdmin:{
        type: String,
        default: false,
    }
})

const User = new mongoose.model("User", userSchema);

module.exports = User;