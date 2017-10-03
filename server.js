var express = require('express'),
    mongoose = require('mongoose'),
    mongoUri = 'mongodb://localhost/nk_db',
    db = mongoose.connection;
    app = express();

app.set("view engine", "ejs");
app.use("/",express.static(__dirname + "/"));

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

mongoose.connect(mongoUri, { useMongoClient: true });
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log('Connected!')
});
require('./models/post');
require('./routes')(app);

app.listen(3003);