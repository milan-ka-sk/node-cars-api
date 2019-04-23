var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require('./config/database');

// connect to db
mongoose.connect(config.database, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected to mongo db');
});

// init app
var app = express();

// prettify json
app.set('json spaces', 40);

// body parser middleware

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Add headers
app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// set routes
var cars = require('./routes/cars');
app.use('/cars', cars);
var cars = require('./routes/login');
app.use('/login', cars);

app.get('/', function(req, res) {
    //res.send('hello world')
    res.sendFile(path.join(__dirname + '/index.html'));
})

// start the server
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('server running at port ' + port);
});