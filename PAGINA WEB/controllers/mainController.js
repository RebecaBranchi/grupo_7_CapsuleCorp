const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const getHome = (req,res)=>{
    res.render("index",{products})
};

const getLogin = (req,res)=>{
    res.render("login")
};

const getRegister = (req,res)=>{
    res.render("register")
}


module.exports ={
    getHome,
    getLogin,
    getRegister
}