var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.params)
  res.render('article', {title:'Article'});
});

module.exports = router;