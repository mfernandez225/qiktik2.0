const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StocksSchema = new Schema({
    symbol: String,
    name: String,
})

const Stocks = mongoose.model("Stocks", StocksSchema);

module.exports = Stocks
