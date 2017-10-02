var mongoose = require('mongoose'),
    Post = mongoose.model('Post');

exports.findAll = function(req, res){
    Post.find({},function(err, results) {
        return res.send(results);
    });
};
// exports.findById = function() {};
// exports.add = function() {};
// exports.update = function() {};
// exports.delete = function() {};

exports.import = function(req, res){
    Post.create(
        { "title": "Тест", "img": "Зображення", "body": "Тест", "url": "test-url" }
        , function (err) {
            if (err) return console.log(err);
            return res.send(202);
        });
};