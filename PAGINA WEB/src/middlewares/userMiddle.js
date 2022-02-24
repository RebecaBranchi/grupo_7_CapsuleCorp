const express = require("express");
const { body, validatorResult } = require("express-validator");

const userValidator = [
        body("first_name")
                .notEmpty()
                .withMessage("debe completar el nombre del usuarios"),
        body("last_name")
                .notEmpty()
                .withMessage("debe completar el apellido del usuarios"),
        body("email")
                .notEmpty()
                .isEmail()
                .withMessage("debe completar el email"),

        body("password")
                .notEmpty()
                .length(8, 16)
                .withMessage("Ingrese contraseña")
                .withMessage("Debe ser alfanumerico como minimo 8 caracteres"),
        body("type")
                .notEmpty()
                .withMessage("Seleccione una de las opciones"),

]

module.exports = userValidator