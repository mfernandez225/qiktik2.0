const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Verifying that the user is suppossed to be viewing the page. This will be beneficial when we decide to add additional features/pages.
// Being used actively to authenticate people as they are favoriting stocks over the API
// Wrapper around the request
const authenticate = (req, res, callback) => {
  const { authorization } = req.headers;
  const token = authorization.split(" ")[1];
  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    User.findById(userId).exec((err, user) => callback(user));
  } catch (e) {
    res.status(401).send({ error: "Unauthorized!" });
  }
};

module.exports = { authenticate };
