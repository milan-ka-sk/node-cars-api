var express = require('express');
var router = express.Router();

// get car model
var Car = require('../models/car');

//
// get all cars
//

router.get('/', function(req, res) {
    Car.find({}, function(err, cars) {
        if (err) console.log(err);
        res.json(cars);
    })
});

//
// post car
//

router.post('/', function(req, res) {

    console.log("post car");
    console.log(req.body);

    var car = new Car(req.body);
    // var car = new Car({

    // });

    car.save(function(err) {
        if (err) {
            console.log(err);
        }
        res.json("ok");
    });

});

module.exports = router;