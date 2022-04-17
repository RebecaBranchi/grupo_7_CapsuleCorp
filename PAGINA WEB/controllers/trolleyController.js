const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

const db = require("../database/models");


const trolleyController = {

    shopping: (req, res) => {
        db.ShoppingCart.findAll({
                include: [{ association: "shoppingProduct" }]
            })
            .then((carts) => {
                res.render('shopping/cart', { carts })
            }).catch(err => { console.log(err) })
    },
    add: (req, res) => {

        db.ShoppingCart.findAll()
            .then((carts) => {

                let cart = carts.length

                if (cart == 0) {

                    db.ShoppingCart.create({

                        order_id: 1,
                        product_id: req.params.id,
                        quantity_products: req.body.stock

                    })

                    res.redirect("/shopping/cart")

                } else {
                    let car = carts.pop()
                    let carr = car.dataValues.order_id

                    db.ShoppingCart.create({

                        order_id: carr + 2,
                        product_id: req.params.id,
                        quantity_products: req.body.stock

                    })

                    res.redirect("/shopping/cart")

                }

            }).catch(err => { console.log(err) })

    }
}


module.exports = trolleyController