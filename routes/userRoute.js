const express = require('express');
const userRouter = express.Router();
const createUserHandler = require('../utilities/userHandlers');

// Define routes here

userRouter.post('/create', createUserHandler);

module.exports = userRouter;
