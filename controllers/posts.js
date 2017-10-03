var mongoose = require('mongoose'),
    post = mongoose.model('Post');

exports.findAll = function(req, res){
    post.find({},function(err, results) {
        return res.send(results);
    });
};

exports.findById = function(req, res) {
    var id_posts = req.params._id;
    post.find({'_id':id_posts},function (err, results) {
        return res.send(results);
    })
};
// exports.add = function() {};
// exports.update = function() {};
// exports.delete = function() {};

exports.import = function(req, res){
    post.create(
        { "title": "Тест", "img": "Зображення", "body": "Тест", "url": "test-url" }
        , function (err) {
            if (err) return console.log(err);
            return res.send(202);
        });
};