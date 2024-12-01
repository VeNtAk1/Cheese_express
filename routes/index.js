var express = require("express");
var router = express.Router();
var Cheese = require("../models/cheese").Cheese;

/* GET home page. */
router.get("/", function (req, res, next) {
  req.session.greeting = "Hi!!!";
  res.render("index", { title: "Express", counter: req.session.counter });
});

/* GET login/registration page. */
router.get("/logreg", function (req, res, next) {
  res.render("logreg", { title: "Вход" });
});

router.get("/adugei", function (req, res, next) {
  res.render("cheese", {
    title: "Адыгейский Сыр",
    picture: "images/adugei.png",
    desc: "Традиционный кавказский сыр из коровьего молока, обладает насыщенным вкусом и плотной текстурой.",
  });
});

router.get("/chedder", function (req, res, next) {
  res.render("cheese", {
    title: "Чедский Сыр",
    picture: "images/chedder.png",
    desc: "Английский сыр из коровьего молока, известен своей мягкой текстурой и слегка острым вкусом.",
  });
});
router.get("/kandal", function (req, res, next) {
  res.render("cheese", {
    title: "Канадльский Сыр",
    picture: "images/kantal.png",
    desc: "Нежный и мягкий сыр из цельного молока, подходит для салатов и закусок.",
  });
});
router.get("/russian", function (req, res, next) {
  res.render("cheese", {
    title: "Российский Сыр",
    picture: "images/russian.png",
    desc: "Обобщенное название для различных видов сыров, производимых в России, включая мягкие, полутвёрдые и твёрдые сыры.",
  });
});
router.get("/tofy", function (req, res, next) {
  res.render("cheese", {
    title: "Тофский Сыр",
    picture: "images/tofy.png",
    desc: "Сухой и соленый овечий сыр, традиционно изготавливаемый в Грузии.",
  });
});
module.exports = router;
//res.render('error');
