var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('content/promotions', {
    title: 'Express'
  });
});

module.exports = router;
