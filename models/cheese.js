var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var cheeseSchema = new Schema({
  title: String,
  nick: {
    type: String,
    unique: true,
    required: true,
  },
  avatar: String,
  desc: String,
  created: {
    type: Date,
    default: Date.now,
  },
});
module.exports.Cheese = mongoose.model("Cheese", cheeseSchema);