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

module.exports = router;