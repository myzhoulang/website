var express = require('express');
var router = express.Router();

//	首页路由
exports.index  = function(req, res, next){
  res.render('index', { title: 'Express' });
}

//	文章页路由
exports.article  = function(req, res, next){
  console.log(req.params)
  res.render('article', {title:'Article'});
}


//	文章分类页
exports.lists = function(req, res, next){
  res.render('lists', {title:'lists'});
}

