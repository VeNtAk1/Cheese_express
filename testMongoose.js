const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/testMongoose2024");
var Cheese = require("./models/cheese.js").Cheese;
var cheese = new Cheese({
  title: "Адыгейский сыр",
  nick: "Adugeiskij",
});
cheese.save();
