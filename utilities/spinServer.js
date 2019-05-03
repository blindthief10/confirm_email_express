const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const userRoute = require('../routes/userRoute');
const errorHandler = require('../utilities/errorHandler');
const dotenv = require('dotenv').config();
const app = express();

const url = process.env.DB_URL;

const spinServer = async () => {
  try {
    await app.listen(4000);
    console.log('Server is listening in port 4000');
    await mongoose.connect(url, {useNewUrlParser: true});
    console.log('Connected to mongo');
  }catch (error) {
    console.log(error);
  }
}

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/users', userRoute);
app.use(errorHandler);

module.exports = spinServer;
