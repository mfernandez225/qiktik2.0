const router = require("express").Router();
const stocksController = require('../../controllers/stocksController');

router.route("/")
.get(stocksController.activeAssets)

router.route('/:symbol')
.get(stocksController.barset)
.get(stocksController.particularAssets)

module.exports = router