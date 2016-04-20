var express = require('express');
var router = express.Router();
var title = "Smart'Dogs"

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('accueil', { title: title });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {title: title});
});
module.exports = router;
