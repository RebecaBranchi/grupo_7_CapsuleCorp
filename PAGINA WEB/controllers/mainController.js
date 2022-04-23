const fs = require('fs');
const path = require('path');

const db = require("../database/models")


const getHome = (req, res) => {

    let Product = db.Product.findAll()
    let Categ = db.ProductCategory.findAll();
    let Col = db.ProductColor.findAll();
    let Bran = db.ProductBrand.findAll();
    Promise
        .all([Product, Categ, Col, Bran])
        .then(([products, categories, colors, brands]) => {
            return res.render("users/index", { products, categories, colors, brands });
        }).catch(err => { console.log(err) })

};

module.exports = {
    getHome,

}