const router =require("express").Router();
const Alpaca = require('@alpacahq/alpaca-trade-api');
const alpaca = new Alpaca();

router.route("/stocks")
.get(
     activeAssets = alpaca.getAssets({
        status: 'active'
    }).then((activeAssets) => {
        const nasdaqAssets = activeAssets.filter(asset => asset.exchange == 'NASDAQ')
        console.log(nasdaqAssets)
    })
)