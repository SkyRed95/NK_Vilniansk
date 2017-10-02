var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: String,
    img: String,
    body: String,
    url: String
},
{
    versionKey: false
});

mongoose.model('Post', PostSchema);