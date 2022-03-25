const fs = require('fs');
const path = require('path');

const db = require ("../database/models")


const getHome = (req,res)=>{

 db.Product.findAll()
.then(products=>{  

    res.render("users/index",{products})
})};



module.exports ={
    getHome,
    
}