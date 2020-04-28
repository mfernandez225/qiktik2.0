const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
  symbol: String,
  name: String,
});

const Favorite = mongoose.model("Favorite", FavoriteSchema);

module.exports = Favorite;
module.exports.FavoriteSchema = FavoriteSchema;
