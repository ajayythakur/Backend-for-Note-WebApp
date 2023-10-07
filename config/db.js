const mongoose = require('mongoose');

const connection = async() => {
    try {
        const connect = mongoose.connect(process.env.DB_URL);
        console.log('Connected to Database');
    } catch (error) {
        console.log('Error in Connection with Database',error);
    }
}

module.exports = connection;
