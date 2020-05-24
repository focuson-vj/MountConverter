var express = require('express');
var router = express.Router();
var firebasetools = require('../app/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  firebasetools.getData();
  res.render('index', { title: 'Express' });
});

module.exports = router;
