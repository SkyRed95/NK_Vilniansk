var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: String,
    img: String,
    content: String
},
{
    versionKey: false
});

mongoose.model('Post', PostSchema);