const { validationResult } = require('express-validator');

const bcryptjs = require('bcryptjs');

const db = require("../database/models");

const userController = {

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

       
        }else{ 
        
     db.User.findOne({where:{email: req.body.email}})
     .then((userInDB)=>{   
     if(userInDB){
             res.render('users/register', {
                 errors: {
                    email:{
                    msg:'Este correo electronico ya esta registrado'
                    }
                },
            oldData :req.body
            })
        }else{  

     db.User.create(
        {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: bcryptjs.hashSync(req.body.password, 10),
        adress: req.body.adress,
        avatar:req.file.filename,
        category_id: 1,
       } )
   
    }
      
      
       return res.redirect('/users/login')
    }).catch(  err => { console.log(err)})}},

    login: (req, res) => {
             
               res.render('users/loginEmail')
       },
   
    loginProcess:(req,res)=>{
        
        db.User.findOne({where:{email: req.body.email}})

        .then( (userToLogin)=>{  

        const resultValidation = validationResult(req);
       
        if (resultValidation.errors.length > 0) {
            res.render('users/loginEmail', {
                errors: resultValidation.mapped(),
                oldData:req.body
            });
        } else if(!userToLogin){
           
            return res.render('users/loginEmail', {
                errors: {
                   email:{
                   msg:'El correo electronico no esta registrado'
                   }
               },
              
           })
        }else{
            res.render('users/loginPass', {
            oldData :req.body})
             }}).catch(  err => { console.log(err)})},
       
         
loginPass: (req,res)=>{

     db.User.findOne({where:{ email: req.body.email}})
           .then ( (userToLogin)=>{    

            let isOkThePassword = bcryptjs.compareSync(req.body.password,userToLogin.password);
      

         
            if(isOkThePassword){
                delete userToLogin.password;
                
                req.session.userLogged = userToLogin ;

                if(req.body.remember_user) {

                res.cookie('userEmail',req.body.email, { maxAge: (1000 * 60) * 60 })
                }
         

                 return res.redirect('/users/profile')
          
            }else{ 
            return res.render('users/loginPass', {
                errors: {
                   email:{
                   msg:'La contraseña es errónea'
                   }
               },
               oldData :req.body
           })};
        }).catch(  err => { console.log(err)})},
 

    profile: (req, res) => {
        return res.render('users/profile',{
            user: req.session.userLogged
        });
    },

    logout: (req,res)=> {
        res.clearCookie('userEmail');
        req.session.destroy();
         return res.redirect('/');
    }
}

module.exports = userController

