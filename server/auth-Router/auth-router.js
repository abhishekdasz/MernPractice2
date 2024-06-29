const express = require('express');
const { Home, Register } = require('../auth-Controller/auth-controller');
// or
const authControler  = require('../auth-Controller/auth-controller');

const router = express.Router();

// 1. only router
// router.get("/api/auth", (req, res) => {
//     res.status(200).send("Hello World, This is the backend from Router.");
// })

// or

// router.route("/api/auth").get((req, res) => {
//     res.status(200).send("Hello World, This is the backend from Routerrrrrr.");
// })

// router.route("/api/auth/register").get((req, res) => {
//     res.status(200).send("Hello World, This is the backend register from Routerrrrrr.");
// })

// 2. router using controller
// router.route("/api/auth").get(Home);
// or
router.route("/api/auth").get(authControler.Home);
router.route("/api/auth/register").get(authControler.Register);

module.exports = router;