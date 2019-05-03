const express = require('express');
const userRouter = express.Router();
const createUserHandler = require('../utilities/userHandlers');

userRouter.post('/create', createUserHandler);

module.exports = userRouter;
