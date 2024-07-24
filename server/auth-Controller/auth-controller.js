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

    const Login = async (req, res) => {
        try
        {
            const { email, password } = req.body;
            const userExist = await User.findOne({email});
            console.log(userExist);

            if(!userExist)
            {
                return res.status(400).json({msg: "Invalid credentials!!!"});
            }

            const isPasswordValid = await bcrypt.compare(password, userExist.password);
            if(isPasswordValid)
            {
                // Generate JWT token
                const token = await userExist.generateToken();
                return res.status(200).json({ msg:"Login successful", token, userId: userExist._id.toString()  })
            }  
            else 
            {
                return res.status(401).json({ msg: "Invalid credentials !!!" })
            }

        }                   
        catch(error)
        {
            res.status(400).json("Internal server error while login.");
            console.error("Error");
        }
    }

    module.exports = {Home, Register, Login};

    