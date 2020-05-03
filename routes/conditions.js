var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/conditions', function(req, res, next) {
  res.render('content/conditions', {
    title: 'Express'
  });
  next();
});

module.exports = router;
