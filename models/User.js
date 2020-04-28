const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { FavoriteSchema } = require("./Favorite");

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  passwordHash: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  stocks: [FavoriteSchema],
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
