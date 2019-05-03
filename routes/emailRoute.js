const express = require('express');
const emailRouter = express();
const userModel = require('../models/userModel');

emailRouter.get('/confirm/:stamp', async (req, res, next) => {
  try {
    const user = await userModel.findOneAndUpdate({temporaryToken: req.params.stamp}, {$set: {isConfirmed: true}, $unset: {temporaryToken: ''}});
    user ? res.redirect('https://www.google.de') : res.status(404).json({message: 'User was not found'})
  }catch{
    next(error);
  }
})

module.exports = emailRouter;
