var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/carpark', function(req, res, next) {
  res.render('content/carpark', {
    title: 'Express'
  });
  next();
});

module.exports = router;
