const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },

    role : {
        type : String,
        enum : ['admin', 'user'], 
        default : 'user',

    }
    
},{timestamp : true});

module.exports = mongoose.model('User', userSchema);

