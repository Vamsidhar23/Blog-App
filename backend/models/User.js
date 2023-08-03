const mongoose = require('mongoose');

const userSchema =new mongoose.Schema({
    username : {
        type : String,
        required : true, //This option indicates that a value for this field is required when creating or updating a document. 
        unique : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
        unique : true,
    },
    profilePic : {
        type : String,
        default: "",
    },
},
    {timestamps: true} //This field track the creation and modification timestamps of the document.
);

module.exports = mongoose.model('User',userSchema);