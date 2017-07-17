var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PageSchema = new Schema({
    title: String,
    img: String,
    text: String
});

mongoose.model('Page', PageSchema);