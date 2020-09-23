const router = require("express").Router();
const stocksController = require('../../controllers/stocksController');

router.route("/stocks")
.get(stocksController.activeAssets)

module.exports = router