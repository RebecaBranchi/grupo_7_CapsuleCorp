const express = require ("express");
const router = express.Router();
const path = require("path");
const categoriesController = require ("../controllers/categoriesController");
const multer = require ("multer");
const { body} = require ("express-validator");
const categoryValidator= require ("../middlewares/categoryMiddle")



const fileStorageEngine = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/img/category'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}--${file.originalname}`) } 
  });

const upload = multer({storage: fileStorageEngine});

router.get("/",categoriesController.listCategories);


router.get("/create",categoriesController.create);
router.post("/create",upload.single('image'),categoryValidator,categoriesController.store);

router.get("/edit/:id",categoriesController.editCategory);
router.put("/update/:id",categoriesController.updateCategory);

router.delete("/delete/:id",categoriesController.delete);

module.exports = router