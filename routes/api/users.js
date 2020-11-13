const User = require("../../models/User.js");
const router = require("express").Router();
const { authenticate } = require("../../utils/auth");

// Using authenticate to verify the request by the user and fetching the user record.
router.route("/stocks").get((req, res) => {
  authenticate(req, res, (user) => {
    res.send(user.stocks);
  });
});

// Users info is being checked against hashed token so it can store stocks to them in the database
router.route("/stocks").post((req, res) => {
  authenticate(req, res, (user) => {
    const { name, symbol } = req.body;
    user.stocks.addToSet({ name, symbol });
    user.save();
    res.send(user.stocks);
  });
});
// We check the stockId against what is favorited to then remove stock.
router.route("/stocks/:id").delete((req, res) => {
  authenticate(req, res, (user) => {
    const stockId = req.params.id;
    user.stocks.remove(stockId);
    user.save();
    res.send(user.stocks);
  });
});

module.exports = router;
