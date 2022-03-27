const fs = require('fs');
const path = require('path');

const db = require("../database/models")

const productController = {

    listProducts: (req,res)=>{
        db.Product.findAll(  
        { include:[{association:"productscategories"},
        {association:"productscolors"},
        {association:"productsbrands"}]})
        .then((products)=>{
             res.render("products/products", {products: products});
        }).catch(
          err => { console.log(err)}
        )
    },
     
   detailProduct:(req,res)=>{
        db.Product.findByPk(req.params.id,{
            include:[{association:"productscategories"},
            {association:"productscolors"},
            {association:"productsbrands"}]
        })
        .then((product)=>{
           
             res.render("products/productDetail", {product: product});
        }).catch(
            err => { console.log(err)}
          )
    },
   
    create: (req,res)=>{
         let Categ =  db.ProductCategory.findAll();
         let Col = db.ProductColor.findAll();
         let Bran = db.ProductBrand.findAll();
         Promise
         .all ([Categ,Col,Bran])
         .then(([categories,colors,brands])=>{
               return res.render("products/create", {categories,colors,brands});
           }).catch(  err => { console.log(err)})
    },

 
     store: (req,res)=>{
        db.Product.create({
            name: req.body.name,
            description:req.body.description,
            image:req.file.filename,
            stock:req.body.stock,
            price: req.body.price,
            discount:req.body.discount,
            category_id:req.body.category,
            color_id:req.body.color,
            brand_id:req.body.brand
        })
            res.redirect("/products")
      },




     editProduct:(req,res)=>{
        let id = req.params.id
        let Prod = db.Product.findByPk(id)
        let Categ =  db.ProductCategory.findAll();
        let Col = db.ProductColor.findAll();
        let Bran = db.ProductBrand.findAll();
        Promise
        .all ([Prod,Categ,Col,Bran])
        .then(([product,categories,colors,brands])=>{
              return res.render("products/edit", {product,categories,colors,brands});
          }).catch(  err => { console.log(err)})
       
     },



     updateProduct: (req,res)=>{
          if (req.file){  
        db.Product.update({
            name: req.body.name,
            description:req.body.description,
            image:req.file.filename,
            stock:req.body.stock,
            price: req.body.price,
            discount:req.body.discount,
            category_id:req.body.category,
            color_id:req.body.color,
            brand_id:req.body.brand
        },{where:{id:req.params.id}})
            res.redirect("/products")
         }else{
            db.Product.update({
                name: req.body.name,
                description:req.body.description,
                stock:req.body.stock,
                price: req.body.price,
                discount:req.body.discount,
                category_id:req.body.category,
                color_id:req.body.color,
                brand_id:req.body.brand
            },{where:{id:req.params.id}})
                res.redirect("/products")

         }
     
     
        },

    
    delete: (req,res )=> {
  db.Product.destroy({where: {
      id:req.params.id
  }})
  res.redirect("/products")
       }
    
    
}







module.exports = productController