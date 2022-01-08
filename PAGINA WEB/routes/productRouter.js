const express = require ("express");

const router = express.Router();

const productController = require ("../controllers/productController");

router.get("/productDetail", productController.detalleProducto);

router.get("/carrito", productController.carrito);

router.get("/crearEditar", productController.creareditar);


module.exports = router

