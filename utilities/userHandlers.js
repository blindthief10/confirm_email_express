const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const {createOptions, transporter} = require('./emailOptions');
const userModel = require('../models/userModel');

const createUserHandler = async (req, res, next) => {
  try {
    req.body.isConfirmed = false;
    const createTimestamp = Date.now();
    const createMathRandom = Math.round(Math.random() * 10000);
    req.body.temporaryToken = createTimestamp.toString() + createMathRandom.toString();
    await userModel.create(req.body);

    const mailOptions = createOptions(req.body.email, req.body.temporaryToken);

    await transporter.sendMail(mailOptions);
    res.status(201).json({message: 'User was created succesfully. We have sent you a confirmation email'});
  }catch(error) {
    next(error);
  }
}

module.exports = createUserHandler;
