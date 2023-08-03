const mongoose = require('mongoose');

const postSchema =new mongoose.Schema({
    title : {
        type : String,
        required : true, //This option indicates that a value for this field is required when creating or updating a document. 
        unique : true,
    },
    desc : {
        type : String,
        required : false,
    },
    photo : {
        type : String,
        required : false,
    },
    username : {
        type : String,
        required : true,
    },
    categories : {
        type : Array,
        required : false
    }
},
    {timestamps: true} //This field track the creation and modification timestamps of the document.
);

module.exports = mongoose.model('Post',postSchema);