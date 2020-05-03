var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/prices', function(req, res, next) {
  res.render('content/prices', {
    title: 'Express'
  });
  next();
});

module.exports = router;
