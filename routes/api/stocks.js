const router = require("express").Router();
const stocksController = require('../../controllers/stocksController');

router.route("/stocks")
.get(stocksController.findAll)

module.exports = router