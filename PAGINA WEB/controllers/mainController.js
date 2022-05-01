const fs = require('fs');
const path = require('path');

const db = require("../database/models")


const getHome = (req, res) => {

    let Product = db.Product.findAll()
    let pVisited1 = db.Product.findAll({
        where: {
            category_id: req.cookies.cat1
        },
        include: [{ association: "productscategories" },
            { association: "productscolors" },
            { association: "productsbrands" }
        ]
    });
    let pVisited2 = db.Product.findAll({
        where: {
            category_id: req.cookies.cat2
        },
        include: [{ association: "productscategories" },
            { association: "productscolors" },
            { association: "productsbrands" }
        ]
    });
    let Categ = db.ProductCategory.findAll();
    let Col = db.ProductColor.findAll();
    let Bran = db.ProductBrand.findAll();
    Promise
        .all([Product, pVisited1, pVisited2, Categ, Col, Bran])
        .then(([products, pv1, pv2, categories, colors, brands]) => {
            return res.render("users/index", { products, pv1, pv2, categories, colors, brands });
        }).catch(err => { console.log(err) })

};

module.exports = {
    getHome,

}