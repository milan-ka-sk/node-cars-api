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

//
// get car (by ID)
//

router.get('/:id', function(req, res) {
    var id = req.params.id;

    Car.findOne({ _id: id }, function(err, car) {
        if (err) console.log(err);
        res.json(car);
    })
});

//
// edit (update) car
//



router.put('/:id', function(req, res) {
    var id = req.params.id;
    var newCar = req.body;
    console.log("PUT");
    console.log(id);
    console.log(req.body);
    // res.send({ type: "PUT" });
    // res.json("put ok");

    Car.findById(id, function(err, car) {
        if (err) console.log(err);

        car.brand = newCar.brand;
        car.model = newCar.model;
        car.year = newCar.year;
        car.price = newCar.price;
        car.km = newCar.km;
        car.engine = newCar.engine;

        car.save(function(err) {
            if (err) {
                console.log(err);
                res.json("problem");
            } else {
                res.json("put ok");
            }
        });

    });
});
// router.post('/:id', function(req, res) {

//     var id = req.params.id;

//     console.log("put car");
//     console.log(id);
//     console.log(req.body);

// Car.findById(id, function(err, car) {
//     if (err) console.log(err);

//     page.title = title;
//     page.slug = slug;
//     page.content = content;

//     page.save(function(err) {
//         if (err) {
//             console.log(err);
//             res.json("problem");
//         } else {
//             res.json("ok");
//         }
//     });



//
//  delete car
//

router.delete('/:id', function(req, res) {
    var id = req.params.id;
    console.log('DELETE: ' + id);

    Car.findByIdAndRemove(id, function(err) {
        if (err) {
            console.log(err);
            res.json("error");
        } else {
            res.json("ok");
        }
    })
});

module.exports = router;