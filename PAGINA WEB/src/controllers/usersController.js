const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');


const controller = {
    register: (req, res) => {
         res.render('users/register');
    },
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        return res.send('ok, las validaciones se pasaron y no tienes errores')
    },
    login: (req, res) => {
        res.render("users/login")
    },

    profile:(req, res) => {
    return res.render("users/profile")
    },
}

module.exports = controller

