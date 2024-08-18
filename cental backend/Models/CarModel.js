const mongoose = require('mongoose');



const CarSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    model : {
        type : String,
        required : true
    },
    
    seater : {
        type : Number,
        required : true
    },
    fule_type : {
        type : String,
        required : true
    },
    
    rent : {
        type : Number,
        required : true
    },
    image : {
        type : String,
        required : true
    }
    
},{timestamp : true});

module.exports = mongoose.model('Car', CarSchema);

