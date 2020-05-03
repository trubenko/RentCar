var listCars = require('../data/data');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
          title: 'Express',
          cars: listCars
      });
});

module.exports = router;