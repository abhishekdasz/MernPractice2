npm i express



const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Hello World, This is backend server. Nice");
})

const PORT = 5600;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})