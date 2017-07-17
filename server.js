var express = require('express');
    bodyParser = require('body-parser');
    mongoose = require('mongoose');
    fs = require('fs');

var app = express();
// app.all('*', function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });
app.use(bodyParser.json());

//mongoose.Promise = global.Promise;
var mongoUri = 'mongodb://localhost/prod_db';
mongoose.connect(mongoUri, { useMongoClient: true });
//var db = mongoose.createConnection('mongodb://localhost/prod_db');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log('Connected!')
});

// var ProductSchema = new mongoose.Schema({
//         title: {type: String},
//         img: {type: String},
//         text: {type: String}
//     },
//     {
//         versionKey: false
//     });
// var ReviewSchema = new mongoose.Schema({
//         id_prod: {type: String},
//         author: {type: String},
//         rate: {type: Number},
//         text: {type: String}
//     },
//     {
//         versionKey: false
//     });

//var Product = db.model('Product', ProductSchema);
//var Review = db.model('Review', ReviewSchema);

// app.get('/api/products', function (req, res) {
//     Product.find(function (err, products) {
//         res.send(products);
//     })
// })
// app.get('/api/reviews/:id_prod', function (req, res) {
//     var id_prod = req.params.id_prod;
//     Review.find({'id_prod':id_prod},function (err, reviews) {
//         res.send(reviews);
//     })
// })
// app.post('/api/reviews', function (req, res) {
//     var id_prod = req.body.id_prod;
//     var author = req.body.author;
//     var rate = req.body.rate;
//     var text = req.body.text;
//
//     var newreview = new Review({
//         id_prod: id_prod,
//         author: author,
//         rate: rate,
//         text: text
//     })
//     newreview.save(function () {
//         res.send();
//     })
// })

require('./models/page');
require('./routes')(app);

app.listen(3000);