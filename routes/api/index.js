const router = require("express").Router();
const userRoutes = require("./users");
const authRoutes = require("./auth");
const signupRoutes = require("./signup");
const stocksRoutes = require("./stocks");
require('dotenv').config()


router.use("/signup", signupRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/stocks", stocksRoutes);


module.exports = router;
