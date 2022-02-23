const fs = require('fs');
const path = require('path');
const { body , validationResult} = require("express-validator")
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {

    listProducts: (req,res)=>{
        res.render("products/products",{products})
    },
     
    detailProduct:(req,res)=>{
       let idProduct = req.params.id;
       const productDetail = products.filter( prod => prod.id == idProduct);
        res.render("products/productDetail",{productDetail});
    },
    
    create: (req,res)=>{
        const errores = validationResult(req);
        const mensajes = errores.errors.map(error => error.msg)
        res.render("products/create",{errores: mensajes})
    },

     store: (req,res)=>{
        let newProduct ={
            id:products[products.length -1].id +1,
            name: req.body.name,
            description: req.body.description,
            color: req.body.color,
            discount: parseInt(req.body.discount),
            price: parseInt(req.body.price),
            //image: req.file.filename,
            type: req.body.type
           
            
     } 
     const errores = validationResult(req);
     if (!errores.isEmpty()) {
     const mensajes = errores.errors.map(error => error.msg)
     console.log(mensajes)
     res.render("products/create", {errores: mensajes})
     } else{ 
        products.push(newProduct);
        const newJSON=JSON.stringify(products,null,1);
        fs.writeFileSync(productsFilePath,newJSON,"utf-8");
        res.render(`products/create`);
    }
     },
     editProduct:(req,res)=>{
        let idProduct = req.params.id
        const productEdit = products.filter(prod => prod.id == idProduct)
        res.render("products/edit",{productEdit})
     },
     updateProduct: (req,res)=>{
        let idProduct = req.params.id ;
        const productsEdit = products.filter(prod => prod.id != idProduct);
    
        let prodEdit= {
            id: parseInt(idProduct),
            name: req.body.name,
            description: req.body.description,
            color: req.body.color,
            discount: parseInt(req.body.discount),
            price: parseInt(req.body.price),
            //image: req.file.filename,
            type: req.body.type
        } 
        productsEdit.push(prodEdit);
        let newJSON = JSON.stringify(productsEdit,null,1);
        fs.writeFileSync(productsFilePath,newJSON,"utf-8");
        const productEdit = productsEdit.filter(prod => prod.id == req.params.id)
        res.redirect(`/products/detail/${productEdit[0].id}`);
       
       },
    
    delete: (req,res )=> {
    let idProduct = req.params.id
    const productsDelete = products.filter(prod => prod.id != idProduct);
    let newJSON = JSON.stringify(productsDelete,null,1);
    fs.writeFileSync(productsFilePath,newJSON,"utf-8");
    res.redirect("/products")
    
       }
    /*editProduct:2,
    updateProduct:2,
    
    deleteProduct:2,*/
    
}







module.exports = productController