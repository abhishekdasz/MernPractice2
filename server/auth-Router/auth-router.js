const express = require('express');

const router = express.Router();

// router.get("/api/auth", (req, res) => {
//     res.status(200).send("Hello World, This is the backend from Router.");
// })

// or

router.route("/api/auth").get((req, res) => {
    res.status(200).send("Hello World, This is the backend from Routerrrrrr.");
})

router.route("/register").get((req, res) => {
    res.status(200).send("Hello World, This is the backend from Routerrrrrr.");
})

module.exports = router;