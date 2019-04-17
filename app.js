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

// start the server
var port = 5000;
app.listen(port, function() {
    console.log('server running at port ' + port);
});