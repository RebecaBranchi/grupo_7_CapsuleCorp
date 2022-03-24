const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let db = require("../database/models/User")

const productController = {

    listProducts: (req,res)=>{
        db.Product.findAll()
        .then(function(products){
             res.render("Listas de productos", {products:products});
        }) 
    },
     
    detailProduct:(req,res)=>{
        db.Product.findByPk(req.params.id,{
            include:[{association:"productscategories"},{association:"productscolors"},{association:"productsbrands"}]
        })
        .then(function(products){
             res.render("Detalle pelicula", {products:products});
        }) 
    },
    
    create: (req,res)=>{
           db.Product.findAll()
           .then(function(products){
               return res.render("Creacion de productos", {products:products});
           })
    },

     store: (req,res)=>{
        db.Product.create({
            name: req.body.name,
            description:req.body.description,
            image:req.body.image,
            stock:req.body.stock,
            price: req.body.price,
            category_id:req.body.category,
            color_id:req.body.color,
            brand_id:req.body.brand
        })
            res.redirect("/product")
      },
     editProduct:(req,res)=>{
       
     },
     updateProduct: (req,res)=>{
        
    
            
       
       },
    
    delete: (req,res )=> {
  
    
       }
    
    
}







module.exports = productController