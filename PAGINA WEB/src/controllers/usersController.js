const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controller = {
    register: (req, res) => {
        res.render('users/register');
    },
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData :req.body
            });
        }
    },
    login: (req, res) => {
        res.render("users/login")
    },

    profile: (req, res) => {

        res.render("users/profile")
    },
}

module.exports = controller

