const express = require("express");
const path = require('path');
//const { body, validatorResult } = require("express-validator");
const { body } = require('express-validator')
const validations= [
        body('first_name').notEmpty().withMessage('Tienes que escribir tu nombre'),
        body('last_name')
        .notEmpty().withMessage('Tienes que escribirt tu apellido'),
        body('email').notEmpty().withMessage('Tienes que escribir un correo electronico').isEmail().withMessage('Debes escribir un correo electronico válido').bail(),
        body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
        body('avatar').custom((value, { req })=>{
            let file = req.file;
            let acceptedExtensions = ['.jpg', '.png', '.gif'];
            
    
            if(!file){
                throw new Error('Tienes que subir una imagen');
            }else {
                let fileExtension = path.extname(file.originalname);
                if (!acceptedExtensions.includes(fileExtension)) {
                    throw new Error(`las extensiones del archivo permitidas son ${acceptedExtensions.join(',')} `);
                }
            }
           
            return true;
        })
    ]   

module.exports = validations;