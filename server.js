var express = require('express');
var mongoose = require('mongoose');

var app = express();

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

var mongoUri = 'mongodb://localhost/nk_db';
mongoose.connect(mongoUri, { useMongoClient: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log('Connected!')
});

require('./models/page');
require('./routes')(app);

app.listen(3000);