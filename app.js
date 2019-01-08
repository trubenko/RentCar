var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var i18n = require('i18n');
var language = 'en';
var app = express();
require('./routes/routersHandler')(app);
// minimal config


i18n.configure({
    cookie: 'rentcar',
    locales: ['en', 'de', 'ru'],
    directory: __dirname + '/locales',
    defaultLocale: 'en'
});

app.use(function (req, res, next) {
    // express helper for natively supported engines
    res.locals.__ = res.__ = function () {
        return i18n.__.apply(req, arguments);
    };

    next();
});

app.use(cookieParser());
app.use(i18n.init);



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app.use();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/lang/:lang', function(req, res){
    var language = req.params.lang;
    i18n.setLocale(req, language);

    res.send({ data: req.params.lang})
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;