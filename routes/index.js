var listCars = require('./data');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(listCars);
   res.render('index', {
            title: 'Express',
            cars: listCars
        });
  // next();
});

module.exports = router;