module.exports =  function (req, res, next) {
    console.log(res.cookies);
    res.render('content/autopark', {
        title: 'Express'
    });
};
