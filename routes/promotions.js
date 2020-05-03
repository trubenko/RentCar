var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/promotions', function(req, res, next) {
  res.render('content/promotions', {
    title: 'Express'
  });
  next();
});

module.exports = router;
