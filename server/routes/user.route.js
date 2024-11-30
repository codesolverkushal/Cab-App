const express = require('express');
const {body} = require('express-validator');
const router = express.Router();
const userController = require("../controllers/user.controller");

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be length of 3'),
    body('password').isLength({min:6}).withMessage('Password must be length of 6')
],userController.registerUser)

module.exports = router;