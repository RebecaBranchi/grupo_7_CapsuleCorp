const express = require ("express");
const router = express.Router();
const path = require("path");
const productController = require ("../controllers/productController");
const multer = require ("multer");
const { body, validatorResult } = require ("express-validator");

const fileStorageEngine = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/img'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}--${file.originalname}`) } 
  });

const upload = multer({storage: fileStorageEngine});
const validator = [
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
router.get("/list",productController.listProducts);
router.get("/detail/:id", productController.detailProduct);
router.get("/create",productController.create);
router.post("/create", upload.single('image')  ,productController.store);

router.get("/edit/:id",productController.editProduct);
router.put("/update/:id",productController.updateProduct);

router.delete("/delete/:id",productController.delete);

module.exports = router

