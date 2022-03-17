const express = require ("express");
const router = express.Router();
const path = require("path");
const productController = require ("../controllers/productController");
const multer = require ("multer");
const { body} = require ("express-validator");
const productValidator= require ("../middlewares/productMiddle")



const fileStorageEngine = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/img'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}--${file.originalname}`) } 
  });

const upload = multer({storage: fileStorageEngine});

router.get("/",productController.listProducts);
router.get("/detail/:id", productController.detailProduct);
router.get("/create",productController.create);
router.post("/create",upload.single('image'),productValidator,productController.store);

router.get("/edit/:id",productController.editProduct);
router.put("/update/:id",productController.updateProduct);

router.delete("/delete/:id",productController.delete);

module.exports = router

