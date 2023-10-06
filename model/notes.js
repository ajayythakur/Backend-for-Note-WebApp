const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title : {
        type : String
    },
    description : {
        type : String
    }
},{timestamps : true});

const noteSchema = mongoose.model('notes', schema);

module.exports = {noteSchema};