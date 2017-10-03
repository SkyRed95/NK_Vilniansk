module.exports = function(app){

    var posts = require('./controllers/posts');

    app.get('/posts', posts.findAll);
    app.get('/posts/:_id', posts.findById);
    // app.post('/pages', pages.add);
    // app.put('/pages/:id', pages.update);
    // app.delete('/pages/:id', pages.delete);

    app.get('/import', posts.import);

}