var express = require("express");
const { Cheese } = require("../models/cheese");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Новый маршрутизатор, для маршрутов, начинающихся с cheese");
});
router.get("/:nick", async function (req, res, next) {
  var cheeses = await Cheese.find({nick: req.params.nick});
  console.log(cheeses);
  if(!cheeses.length) return next(new Error("Нет такого сыра"))
  var cheese = cheeses[0];
  res.render('cheese', {
  title: cheese.title,
  picture: cheese.avatar,
  desc: cheese.desc
})

});

module.exports = router;