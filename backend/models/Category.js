const mongoose = require('mongoose');

const categorySchema =new mongoose.Schema({
    name : {
        type : String,
        required : true, //This option indicates that a value for this field is required when creating or updating a document. 
        unique : true,
    },
},
    {timestamps: true} //This field track the creation and modification timestamps of the document.
);

module.exports = mongoose.model('Category',categorySchema);