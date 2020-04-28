const User = require("../../models/User.js");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.route("/login").post((req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (error, user) => {
    if (error) {
      res.status(500).send({ error });
      return;
    }
    if (!user) {
      invalidLogin(res);
      return;
    }
    if (bcrypt.compareSync(password, user.passwordHash)) {
      const { id } = user;
      const token = jwt.sign(
        { exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 365, userId: id },
        process.env.JWT_SECRET
      );
      res.send({ token });
    } else {
      invalidLogin(res);
    }
  });
});

const invalidLogin = (res) => {
  res.status(401).send({ error: "invalid email or password" });
};

module.exports = router;
