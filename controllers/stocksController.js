const Alpaca = require('@alpacahq/alpaca-trade-api')
require("dotenv").config();
const alpaca = new Alpaca({
    keyId:process.env.ALPACA_API_KEY_ID,
    secretKey:process.env.ALPACA_API_SECERET_KEY,
    paper:true,
    usePolygon:false
})



module.exports = {
    activeAssets: function(req,res){
        alpaca.getAssets({
        status:'active'
        })
        .then(activeAssets =>{
        const nasdaqAssets = activeAssets.filter(asset=> asset.exchange == 'NASDAQ')
        res.json(nasdaqAssets)
        })
    },
    barset: function(req,res){
        let symbol = req.params.symbol
        alpaca.getBars('day',symbol, {limit:5})
        .then((barset)=>{
            
            const symbol_bars = barset[symbol]
            console.log(symbol_bars)
        
             res.json(symbol_bars);
        })
        .catch(err => console.log(err))
    }
};
    
