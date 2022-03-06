const express = require("express");
const { body, validatorResult } = require ("express-validator");

const productValidator = [
    body("name")
            .notEmpty()
            .withMessage("debe completar el nombre del producto"),
    body("description")
            .notEmpty()
            .withMessage ("debe realizar una descripcion breve del producto"),
    body("color")
            .notEmpty()
            .withMessage ("debe completar el color"),
    body("discount")
            .isInt()
            .withMessage ("tiene descuento?"),
    body("price")
            .isInt()
            .withMessage("debe colocar un precio a su producto"),
    body("type")
             .notEmpty()
             .withMessage ("seleccione una de la opciones"),
      ]

module.exports= productValidator