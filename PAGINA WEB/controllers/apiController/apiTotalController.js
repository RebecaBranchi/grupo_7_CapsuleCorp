const db = require("../../database/models");
const { Op } = require("sequelize");


const TotalController = {
listTotal: (req, res) => {
    let Product = db.Product.findAll({
        include: [{ association: "productscategories" },
            { association: "productscolors" },
            { association: "productsbrands" }
        ]
    });
    let Categ = db.ProductCategory.findAll();
    let Col = db.ProductColor.findAll();
    let Bran = db.ProductBrand.findAll();
    Promise
        .all([Product, Categ, Col, Bran])
        .then(([products, categories, colors, brands]) => {
            let productCategory = []
            products.forEach(product => {
                productCategory.push(`${product.productscategories.name}`)
            });
            let countCategory = productCategory.reduce((a, d) => (a[d] ? a[d] += 1 : a[d] = 1, a), {});

                return res.status(200).json({
                    data: [ 
                       {  name: "Products",
                           total: products.length},
                       { name: "Categories",
                           total: categories.length},
                       { name: "Colors",
                           total: colors.length},
                       { name: "Brands",
                           total: brands.length}
                    ],

                    status: 200
                })
      
        }).catch(
            err => { console.log(err) }
        )
}
}


module.exports = TotalController