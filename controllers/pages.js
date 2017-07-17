var mongoose = require('mongoose'),
    Page = mongoose.model('Page');

exports.findAll = function(req, res){
    Page.find({},function(err, results) {
        return res.send(results);
    });
};
// exports.findById = function() {};
// exports.add = function() {};
// exports.update = function() {};
// exports.delete = function() {};

exports.import = function(req, res){
    Page.create(
        { "title": "Тест", "img": "Зображення", "body": "Тест", "url": "test-url" }
        , function (err) {
            if (err) return console.log(err);
            return res.send(202);
        });
};