const express = require ("express");
const router = express.Router();
const path = require("path");
const brandsController = require ("../controllers/brandsController");
const brandMiddle = require ("../middlewares/brandMiddle")


router.get("/",brandsController.listBrands);

router.get("/create",brandsController.create);
router.post("/create",brandMiddle,brandsController.store);

router.get("/edit/:id",brandsController.editBrand);
router.put("/update/:id",brandsController.updateBrand);

router.delete("/delete/:id",brandsController.delete);

module.exports = router