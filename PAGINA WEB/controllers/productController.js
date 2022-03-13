const fs = require('fs');
const path = require('path');
const {validationResult} = require("express-validator")
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
           res.render("products/create")
    },

     store: (req,res)=>{
    
     const resultValidation = validationResult(req);
     if (resultValidation.errors.length > 0) {
        res.render('products/create', {
            errors: resultValidation.mapped(),
            oldData :req.body
        }); 

    } else{ 
        let newProduct ={
            id:products.length +1,
            name: req.body.name,
            description: req.body.description,
            color: req.body.color,
            discount: parseInt(req.body.discount),
            price: parseInt(req.body.price),
            image: req.file.filename,
            type: req.body.type
            
     } 
        products.push(newProduct);
        const newJSON=JSON.stringify(products,null,1);
        fs.writeFileSync(productsFilePath,newJSON,"utf-8");
        res.redirect("/products/create");
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
            image: req.file.filename,
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
    
    
}







module.exports = productController