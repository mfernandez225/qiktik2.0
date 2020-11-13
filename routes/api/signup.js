const User = require("../../models/User.js");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Installed and imported bcrypt to hash and salt users info to keep secure
// JWT = JSON Web Token / encodes users information into a token that is then used to store whatever they favorite using that token
// We are using a Salt to safeguard user information and Hashing as well

router.route("/").post((req, res) => {
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
      // Salt is randomizing the hashed password
      const passwordHash = bcrypt.hashSync(password, process.env.PASSWORD_SALT);
      const user = new User({ firstName, lastName, email, passwordHash });
      user.save();
      // The token allows us to identify who is making the request
      // We prevent someone from tampering with the token by signing it using our JWT-Secret
      const token = jwt.sign(
        {
          // This is a page time out set for 1 year. We can manage the length if we want a user to time out after being on the page for a set period of time.
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
