const { response } = require('express');
const fs = require('fs');
const path = require('path');

const db = require("../../database/models")

const apiController = {

    list: (req, res) => {
        db.Product.findAll({
                include: [{ association: "productscategories" },
                    { association: "productscolors" },
                    { association: "productsbrands" }
                ]
            })
            .then((product) => {

                return res.status(200).json({
                    total: product.length,
                    data: product,
                    status: 200
                })

            })
    }


}


module.exports = apiController