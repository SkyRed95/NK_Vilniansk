var mongoose = require('mongoose'),
    post = mongoose.model('Post');

exports.findAll = function (req, res) {
    post.find({}, function (err, results) {
        res.render('index', {results});
    });
};

exports.findById = function (req, res) {
    var id = req.params.id;
    post.find({}, function (err, results) {
        res.render('post', {post: results[id - 1]});
    });
};
// exports.add = function() {};
// exports.update = function() {};
// exports.delete = function() {};

exports.import = function (req, res) {
    post.create(
        {"title": "Тест", "img": "Зображення", "body": "Тест", "url": "test-url"}
        , function (err) {
            if (err) return console.log(err);
            return res.send(202);
        });
};