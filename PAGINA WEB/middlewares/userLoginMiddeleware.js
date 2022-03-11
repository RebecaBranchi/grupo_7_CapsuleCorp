const express = require("express");
const path = require('path');

const { body } = require('express-validator')

const validations= [

        body('email').notEmpty().withMessage('Tienes que escribir un correo electronico').isEmail().withMessage('Debes escribir un correo electronico válido').bail(),
        body('password').notEmpty().withMessage('Tienes que escribir una contraseña').bail(),
        
 
      ]
module.exports= validations;