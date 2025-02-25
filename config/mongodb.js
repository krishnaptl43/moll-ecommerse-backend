const mongoose = require('mongoose');
require('dotenv').config();

async function DbConnect() {
    try {
       let con = await mongoose.connect(process.env.MONGO_URL);
       return con;
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = DbConnect;