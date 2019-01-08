var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log(req.cookies);
    res.clearCookie('name');
    res.render('content/booking', {
        title: 'Express'
    });
});

module.exports = router;
