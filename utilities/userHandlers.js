const mongoose = require('mongoose');
const userModel = require('../models/userModel.js');
const 

const createUserHandler = async (req, res, next) => {
  try {
    req.body.isConfirmed = false;
    const createTimestamp = Date.now();
    const createMathRandom = Math.round(Math.random() * 10000);
    req.body.temporaryToken = createTimestamp.toString() + createMathRandom.toString();
    await userModel.create(req.body);
    // Use credentials to create the temp email here!

    res.status(201).json({message: 'User was created succesfully. We have sent you a confirmation email'})
  }catch(error) {
    next(error);
  }
}

module.exports = createUserHandler;
