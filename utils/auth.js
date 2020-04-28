const jwt = require("jsonwebtoken");
const User = require("../models/User");

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
