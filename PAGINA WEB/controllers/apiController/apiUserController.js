const fs = require('fs');
const path = require('path');
const db = require("../../database/models");
const { Op } = require("sequelize");


const apiProductController = {

    listUsers: (req, res) => {
        db.User.findAll({
                include: [{ association: "userscategories" }]
            })
            .then((users) => {
                if (users.length > 0) {
                    return res.status(200).json({
                        total: users.length,
                        data: users,
                        status: 200
                    })
                }
                return res.status(200).json('No se existen en la BD')

            })
    },
    /*   productId: (req, res) => {
           db.Product.findByPk(req.params.id, {
                   include: [{ association: "productscategories" },
                       { association: "productscolors" },
                       { association: "productsbrands" }
                   ]
               })
               .then((product) => {
                   if (product) {
                       return res.status(200).json({
                           data: product,
                           status: 200
                       })
                   }
                   return res.status(200).json('No se existe en la BD')
               })
       },
       storeProduct: (req, res) => {
           db.Product.create(req.body)
               .then((product) => {
                   return res.status(200).json({
                       data: product,
                       status: 200,
                       created: "Ok"
                   })

               })
       },
       deleteProduct: (req, res) => {
           db.Product.destroy({
                   where: {
                       id: req.params.id
                   }
               })
               .then((response) => {
                   return res.status(200).json('Eliminado correctamente')

               })

       },
       searchProducts: (req, res) => {
           db.Product.findAll({
                   where: {
                       [Op.or]: [{
                               name: {
                                   [Op.like]: `%${req.query.busqueda}%`
                               }
                           },
                           {
                               description: {
                                   [Op.like]: `%${req.query.busqueda}%`
                               }
                           }
                       ]
                   },
                   include: [{ association: "productscategories" },
                       { association: "productscolors" },
                       { association: "productsbrands" }
                   ]
               })
               .then((products) => {
                   if (products.length > 0) {

                       return res.status(200).json({
                           total: products.length,
                           data: products,
                           status: 200
                       })
                   }
                   return res.status(200).json('No existen productos')

               })
       },*/

}
module.exports = apiProductController