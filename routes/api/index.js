const router = require("express").Router();
const userRoutes = require("./users");
const authRoutes = require("./auth");
const signupRoutes = require("./signup");
const stocksRoutes = require("./stocks");
require('dotenv').config()
const API_URL = process.env.API_URL


router.use("/signup", signupRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/", stocksRoutes);
router.route(`/${API_URL}/:url`)

module.exports = router;
