const express = require('express');
const router = require('./auth-Router/auth-router');

const app = express();

// app.use(router);
// or
app.use("/", router);






app.get("/", (req, res) => {
    res.status(200).send("Hello World, This is backend server. Nice");
})

const PORT = 5600;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})