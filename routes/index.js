var express = require("express");
var router = express.Router();
var User = require("../models/user").User;
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

/* POST login/registration page. */
router.post("/logreg", async function (req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  console.log(username);
  console.log(password);
  var users = await User.find({ username: username });
  console.log(users);
  if (!users.length) {
    //res.send("<h1>Пользователь НЕ найден</h1>");
    var user = new User({ username: username, password: password });
    await user.save();
    req.session.user_id = user._id;
    res.redirect("/");
  } else {
    //res.send("<h1>Пользователь найден</h1>");
    var foundUser = users[0];
    if (foundUser.checkPassword(password)) {
      req.session.user_id = foundUser._id;
      res.redirect("/");
    } else {
      res.render("logreg", { title: "Вход" });
    }
  }
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
