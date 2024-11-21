var express = require('express');
var router = express.Router();  

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/adugei', function(req, res, next) {
  res.send("<h1>Адыгейский Сыр</h1>")
});

router.get('/chedder', function(req, res, next) {
res.send("<h1>Чедский сыр</h1>")
});
router.get('/kandal', function(req, res, next) {
res.send("<h1>Кандальский сыр</h1>")
});
router.get('/russian', function(req, res, next) {
res.send("<h1>Русский сыр</h1>")
});
router.get('/tofy', function(req, res, next) {
res.send("<h1>Тофский сыр</h1>")
});
module.exports = router;
