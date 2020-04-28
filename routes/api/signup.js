const User = require("../../models/User.js");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.route("/salt").get((req, res) => {
  res.send(bcrypt.genSaltSync(10));
});

router.route("/new").post((req, res) => {
  const { firstName, lastName, email, password } = req.body;
  User.findOne({ email }, (error, user) => {
    if (error) {
      res.status(500).send({ error });
      return;
    }
    if (user) {
      res.status(401).send({ error: "you already have an account" });
      return;
    } else {
      const passwordHash = bcrypt.hashSync(password, process.env.PASSWORD_SALT);
      const user = new User({ firstName, lastName, email, passwordHash });
      user.save();
      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 365,
          userId: user.id,
        },
        process.env.JWT_SECRET
      );
      res.send({ token });
    }
  });
});

module.exports = router;
