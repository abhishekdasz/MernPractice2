const User = require("../models/userModel");
const bcrypt = require('bcryptjs');

const Home = async (req, res) => {
    try
    {
        res.status(200).send("Hello World, This is the backend from Router using controller.");
    }
    catch(error)
    {
        console.error("Error");
    }
}

User

const Register = async (req, res) => {
    try
    {
        const { username, email, phone, password } = req.body;
        const userExist = await User.findOne({email:email});
        if(userExist)
        {
            res.status(400).json({msg:"Email already exists."});
        }    
        else
        {
            // hash the password
            const saltRound = await bcrypt.genSalt(10);
            const hash_password = await bcrypt.hash(password, saltRound);
            const newUser = await User.create({ username, email, phone, password: hash_password });

            // Generate JWT token
            const token = await newUser.generateToken();
            return res.status(201).json({ msg: "User registered successfully.", token, userId: newUser._id.toString() });
        }
    }
    catch(error)
    {
        res.status(400).json("Internal server error.");
        console.error("Error");
    }
}


module.exports = {Home, Register};