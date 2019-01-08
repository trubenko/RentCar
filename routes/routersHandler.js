module.exports = function (app) {
    app.get('/', function (req, res) {
        var listCars = [
            {
                brand: 'Fiat',
                model: '500',
                classType: 'Budget',
                price: {
                    min: 12,
                    max: 200,
                    total_price: 2000
                },
                day_range: {
                    '1': 33,
                    '2-3': 30,
                    '4-9': 28,
                    '10-29': 23,
                    '30': 20
                },
                engine: 1.2,
                doors: 5,
                petrol_type: 'Disel', //Disel/Gas/Petrol
                bagage_volume: 500, //Litres
                transmission: 'Automat', // 'Mechanic',
                deposit: 400,
                seats: 4,
                allowed_limit: 300, //km
                air_conditional: true,
                drive_wheels: 'front', //front/full/bottom
                images: {
                    small: '../public/images/car1.png',
                    large: '../public/images/car1.png'
                },
                addons: {
                    debt: true,
                    gps: true,
                    videoregister: true,
                    gopro: true,
                    wifi: true,
                    glass_protector: true,
                    ipad: true,
                    assistance: true,
                    ogaso: true,
                    babysit: true
                },
                isAvailable: true,
                promotions: []
            },
            {
                brand: 'Fiat',
                model: '500',
                classType: 'Budget',
                price: {
                    min: 12,
                    max: 200,
                    total_price: 2000
                },
                day_range: {
                    '1': 33,
                    '2-3': 30,
                    '4-9': 28,
                    '10-29': 23,
                    '30': 20
                },
                engine: 1.2,
                doors: 5,
                petrol_type: 'Disel', //Disel/Gas/Petrol
                bagage_volume: 500, //Litres
                transmission: 'Automat', // 'Mechanic',
                deposit: 400,
                seats: 4,
                allowed_limit: 300, //km
                air_conditional: true,
                drive_wheels: 'front', //front/full/bottom
                images: {
                    small: '../public/images/car1.png',
                    large: '../public/images/car1.png'
                },
                addons: {
                    debt: true,
                    gps: true,
                    videoregister: true,
                    gopro: true,
                    wifi: true,
                    glass_protector: true,
                    ipad: true,
                    assistance: true,
                    ogaso: true,
                    babysit: true
                },
                isAvailable: true,
                promotions: []
            },
            {
                brand: 'Fiat',
                model: '500',
                classType: 'Budget',
                price: {
                    min: 12,
                    max: 200,
                    total_price: 2000
                },
                day_range: {
                    '1': 33,
                    '2-3': 30,
                    '4-9': 28,
                    '10-29': 23,
                    '30': 20
                },
                engine: 1.2,
                doors: 5,
                petrol_type: 'Disel', //Disel/Gas/Petrol
                bagage_volume: 500, //Litres
                transmission: 'Automat', // 'Mechanic',
                deposit: 400,
                seats: 4,
                allowed_limit: 300, //km
                air_conditional: true,
                drive_wheels: 'front', //front/full/bottom
                images: {
                    small: '../public/images/car1.png',
                    large: '../public/images/car1.png'
                },
                addons: {
                    debt: true,
                    gps: true,
                    videoregister: true,
                    gopro: true,
                    wifi: true,
                    glass_protector: true,
                    ipad: true,
                    assistance: true,
                    ogaso: true,
                    babysit: true
                },
                isAvailable: true,
                promotions: []
            },
            {
                brand: 'Fiat',
                model: '500',
                classType: 'Budget',
                price: {
                    min: 12,
                    max: 200,
                    total_price: 2000
                },
                day_range: {
                    '1': 33,
                    '2-3': 30,
                    '4-9': 28,
                    '10-29': 23,
                    '30': 20
                },
                engine: 1.2,
                doors: 5,
                petrol_type: 'Disel', //Disel/Gas/Petrol
                bagage_volume: 500, //Litres
                transmission: 'Automat', // 'Mechanic',
                deposit: 400,
                seats: 4,
                allowed_limit: 300, //km
                air_conditional: true,
                drive_wheels: 'front', //front/full/bottom
                images: {
                    small: '../public/images/car1.png',
                    large: '../public/images/car1.png'
                },
                addons: {
                    debt: true,
                    gps: true,
                    videoregister: true,
                    gopro: true,
                    wifi: true,
                    glass_protector: true,
                    ipad: true,
                    assistance: true,
                    ogaso: true,
                    babysit: true
                },
                isAvailable: true,
                promotions: []
            },
            {
                brand: 'Fiat',
                model: '500',
                classType: 'Budget',
                price: {
                    min: 12,
                    max: 200,
                    total_price: 2000
                },
                day_range: {
                    '1': 33,
                    '2-3': 30,
                    '4-9': 28,
                    '10-29': 23,
                    '30': 20
                },
                engine: 1.2,
                doors: 5,
                petrol_type: 'Disel', //Disel/Gas/Petrol
                bagage_volume: 500, //Litres
                transmission: 'Automat', // 'Mechanic',
                deposit: 400,
                seats: 4,
                allowed_limit: 300, //km
                air_conditional: true,
                drive_wheels: 'front', //front/full/bottom
                images: {
                    small: '../public/images/car1.png',
                    large: '../public/images/car1.png'
                },
                addons: {
                    debt: true,
                    gps: true,
                    videoregister: true,
                    gopro: true,
                    wifi: true,
                    glass_protector: true,
                    ipad: true,
                    assistance: true,
                    ogaso: true,
                    babysit: true
                },
                isAvailable: true,
                promotions: []
            }
        ];

        res.render('index', {
            title: 'Express',
            cars: listCars
        });
    });

    app.get('/conditions', function (req, res) {
        res.render('content/conditions', {
            title: 'Express'
        });
    });

    app.get('/users', function (req, res) {
        res.send('respond with a resource');
    });

    app.get('/prices', function (req, res) {
        res.render('content/prices', {
            title: 'Express'
        })
    });

    app.get('/promos', function (req, res) {
        res.render('content/promos', {
            title: 'Express'
        })
    });

    app.get('/booking', function (req, res) {
        res.render('content/booking', {
            title: 'Express'
        })
    });
    app.get('/autopark', function (req, res) {
       res.render('content/autopark', {
            title: 'Express'
        })
    })
}
/*

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/booking', booking);
app.use('/conditions', conditions);
app.use('/prices', prices);
app.use('/promos', promos);
app.use('/autopark', park);*/
