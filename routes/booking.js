var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/booking', function(req, res, next) {
  res.render('content/booking', {
    title: 'Express'
  });
  next();
});

module.exports = router;
