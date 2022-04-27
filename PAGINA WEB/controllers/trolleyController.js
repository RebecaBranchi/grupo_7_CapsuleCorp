const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

const db = require("../database/models");

const trolleyController = {

    shopping: (req, res) => {
        db.ShoppingCart.findAll({
                where: {
                    order_id: req.session.userLogged.id
                },
                include: [{ association: "shoppingProduct" }]
            })
            .then((carts) => {
                res.render('shopping/cart', { carts })
            }).catch(err => { console.log(err) })
    },
    add: (req, res) => {
        db.ShoppingCart.create({
            order_id: req.session.userLogged.id,
            product_id: req.params.id,
            quantity_products: req.body.stock,
        })
        res.redirect("/shopping/cart")
    }
}


module.exports = trolleyController