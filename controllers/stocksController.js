const Alpaca = require('@alpacahq/alpaca-trade-api')
require("dotenv").config();
const alpaca = new Alpaca({
    keyId:process.env.ALPACA_API_KEY_ID,
    secretKey:process.env.ALPACA_API_SECERET_KEY,
    paper:true,
    usePolygon:false
})

//  Get a list of all active assets.

// const activeAssets = alpaca.getAssets({
//     status: 'active'
// }).then((activeAssets) => {

//     Filter the assets down to just those on NASDAQ.

//     const nasdaqAssets = activeAssets.filter(asset => asset.exchange == 'NASDAQ');
//     console.log(nasdaqAssets);
//     return nasdaqAssets;
// })

module.exports = {
    activeAssets: function(req,res){
        alpaca.getAssets({
        status:'active'
        })
        .then(activeAssets =>{
        const nasdaqAssets = activeAssets.filter(asset=> asset.exchange == 'NASDAQ')
        res.json(nasdaqAssets)
})
    }
};
    
