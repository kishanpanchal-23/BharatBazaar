const express = require('express');
const signupRouter =  express.Router();
const { login, registration } = require('../controller/authcontroller');


signupRouter.post('/signup', registration)
signupRouter.post('/login', login)


module.exports = signupRouter;