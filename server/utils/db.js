const mongoose = require('mongoose');

const URI = process.env.MONGO_URI;

const dbConnect = async () => {
    try
    {
        await mongoose.connect(URI);
        console.log("Database connected successfully.");
    }
    catch(error)
    {
        console.log("Database connection failed.");
    }
}


module.exports = dbConnect;