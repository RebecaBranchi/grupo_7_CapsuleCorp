const fs = require('fs');
const path = require('path');

const getLogin = (req,res)=>{
    res.render("users/login")
};

const getRegister = (req,res)=>{
    res.render("users/register")
}
module.exports ={
  
    getLogin,
    getRegister
}