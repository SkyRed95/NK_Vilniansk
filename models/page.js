var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PageSchema = new Schema({
    title: String,
    img: String,
    body: String,
    url: String
},
{
    versionKey: false
});

mongoose.model('Page', PageSchema);