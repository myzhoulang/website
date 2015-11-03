var express = require('express');
var router = express.Router();

///* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});
//
//router.get('/article/:id', function(req, res, next){
//  res.render('article', {title:'Article'});
//})

exports.index  = function(req, res, next){
  res.render('index', { title: 'Express' });
}

exports.article  = function(req, res, next){
  console.log(req.params)
  res.render('article', {title:'Article'});
}

exports.lists = function(req, res, next){
  res.render('lists', {title:'lists'});
}

//module.exports = router;
