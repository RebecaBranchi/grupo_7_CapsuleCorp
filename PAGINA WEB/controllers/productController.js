const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {

    listProducts: (req,res)=>{
        res.render("products/products",{products})
    },
     
    detailProduct:(req,res)=>{
       const idProduct = req.params.id;
        productDetail = products.filter( prod => prod.id == idProduct);
        res.render("products/productDetail",{productDetail});
    },
    
    create: (req,res)=>{
     
        res.render("products/create")
    },

     store: (req,res)=>{
        let newProduct ={
            id:products[products.length -1].id +1,
            ...req.body,
            image: "default.jpg"
     }

     products.push(newProduct);
     const newJSON=JSON.stringify(products,null,1);
     fs.writeFileSync(productsFilePath,newJSON,"utf-8");
     const idProduct = newProduct.id;
     productDetail = products.filter( prod => prod.id == idProduct);
     console.log(productDetail);
     res.redirect(`products/${productDetail[0].id}`);
    

     },

    /*editProduct:2,
    updateProduct:2,
    
    deleteProduct:2,*/
    
}







module.exports = productController