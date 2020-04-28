const User = require("../../models/User.js");
const router = require("express").Router();
const { authenticate } = require("../../utils/auth");

router.route("/favorite-stocks").get((req, res) => {
  authenticate(req, res, (user) => {
    res.send(user.stocks);
  });
});

router.route("/save-stock").post((req, res) => {
  authenticate(req, res, (user) => {
    const { name, symbol } = req.body;
    user.stocks.addToSet({ name, symbol });
    user.save();
    res.send(user);
  });
});

module.exports = router;
