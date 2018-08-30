var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
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

module.exports = router;
