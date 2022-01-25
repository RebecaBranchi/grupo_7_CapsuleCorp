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
    
/*create:1,
 store:1,

    editProduct:2,
    updateProduct:2,
    
    deleteProduct:2,*/
    
}







module.exports = productController