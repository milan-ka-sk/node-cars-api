var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Car Schema

var CarSchema = new Schema({
    brand: String,
    model: String,
    year: Number,
    km: Number,
    price: Number,
    engine: {
        fuel: String,
        power: Number,
        consumption: Number
    }
});

var Car = module.exports = mongoose.model('Car', CarSchema);