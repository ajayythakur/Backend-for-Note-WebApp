const mongoose = require('mongoose');

const connection = async() => {
    try {
        const connect = mongoose.connect('mongodb://127.0.0.1:27017/notes');
        console.log('Connected to Database');
    } catch (error) {
        console.log('Error in Connection with Database',error);
    }
}

module.exports = connection;
