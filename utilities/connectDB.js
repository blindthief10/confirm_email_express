const mongoose = require('mongoose');

const url = process.env.DB_URL;

const connectMongo = async () => {
  try {
    await mongoose.connect(url);
    console.log('Connected to mongo');
  }catch (error) {
    console.log(error);
  }
}

module.exports = connectMongo;
