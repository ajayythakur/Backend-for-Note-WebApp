const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name:{
        type : String,
        require : true
    },
    email : {
        type : String,
        unique : true,
        require : true
    },
    password  : {
        type : String,
        require : true
    },
    contact : {
        type : Number,
        require  : true,
        unique : true
    }
}, { timestamps: true} );

const registerSchema = mongoose.model('user', schema);

module.exports = {registerSchema};