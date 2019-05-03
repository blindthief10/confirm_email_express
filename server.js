const express = require('express');
const nodemailer = require('nodemailer');
const morgan = require('morgan');
const userRoute = require('./routes/userRoute.js');
const connectMongo = require('./utilities/connectDB');
const app = express();

app.listen(4000, () => console.log('Server is listening in port 4000'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/users', userRoute);
