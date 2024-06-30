const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

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

userSchema.methods.generateToken = async function () {
    try 
    {
        const token = jwt.sign(
            {
                userId: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin,
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "1h"
            }
        );
        return token;
    }
    catch(error)
    {
        console.log("Error in generating tokens!!!", error);
    }
};

const User = new mongoose.model("User", userSchema);

module.exports = User;