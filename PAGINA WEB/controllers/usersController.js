const { validationResult } = require('express-validator');
const User = require('../models/user');
const bcryptjs = require('bcryptjs');
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
        let userInDB= User.findByField('email', req.body.email);
        if(userInDB){
             res.render('users/register', {
                 errors: {
                    email:{
                    msg:'Este correo electronico ya esta registrado'
                    }
                },
            oldData :req.body
            })
        }
      
       let userToCreate ={
          ...req.body,
          password: bcryptjs.hashSync(req.body.password, 10),
          avatar:req.file.filename
       }
       let userCreated= User.create(userToCreate);
       return res.redirect('/users/login')
    },
    login: (req, res) => {
               res.render('users/login')
    },
    loginProcess:(req,res)=>{
        let userToLogin = User.findByField('email', req.body.email);
        if(userToLogin){
            let isOkThePassword = bcryptjs.compareSync(req.body.password,userToLogin.password);
            if(isOkThePassword){
                req.session.userLogged = userToLogin ;
                return res.redirect('/users/profile')
            }
            return res.render('users/login', {
                errors: {
                   email:{
                   msg:'La contraseña es errónea'
                   }
               },
        
           });

        }
           return res.render('users/login', {
                errors: {
                   email:{
                   msg:'El correo electronico no esta registrado'
                   }
               },
        
           })
       
        
    },
    profile: (req, res) => {
console.log("estas en profile");
console.log(req.session);
        res.render("users/profile")
    },
}

module.exports = controller

