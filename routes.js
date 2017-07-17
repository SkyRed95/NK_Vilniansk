module.exports = function(app){

    var pages = require('./controllers/pages');

    app.get('/pages', pages.findAll);
    // app.get('/pages/:id', pages.findById);
    // app.post('/pages', pages.add);
    // app.put('/pages/:id', pages.update);
    // app.delete('/pages/:id', pages.delete);

}