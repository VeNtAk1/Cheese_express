var express = require("express");
var Cheese  = require("../models/cheese").Cheese;
var checkAuth = require("../middlewares/checkAuth.js");
var router = express.Router();


/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Новый маршрутизатор, для маршрутов, начинающихся с cheese");
});


router.get("/:nick", checkAuth, async function (req, res, next) {
  var cheeses = await Cheese.find({ nick: req.params.nick });
  console.log(cheeses);
  if (!cheeses.length) return next(new Error("Нет такого сыра"));
  var cheese = cheeses[0];
  res.render("cheese", {
    title: cheese.title,
    picture: cheese.avatar,
    desc: cheese.desc,
  });
});

module.exports = router;
