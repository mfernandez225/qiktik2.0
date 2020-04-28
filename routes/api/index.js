const router = require("express").Router();
const userRoutes = require("./users");
const authRoutes = require("./auth");
const signupRoutes = require("./signup");

router.use("/signup", signupRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

module.exports = router;
