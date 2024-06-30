require('dotenv').config();
const express = require('express');
const router = require('./auth-Router/auth-router');
const dbConnect = require('./utils/db');

const app = express();

app.use(express.json());

// app.use(router);
// or
app.use("/", router);






app.get("/", (req, res) => {
    res.status(200).send("Hello World, This is backend server. Nice");
})

const PORT = 5600;

dbConnect().then(()=>{
    app.listen(PORT, ()=> {
        console.log(`Server is running on port ${PORT}`);
    })
})
