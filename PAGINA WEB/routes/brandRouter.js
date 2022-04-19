const express = require("express");
const router = express.Router();
const path = require("path");
const brandsController = require("../controllers/brandsController");
const brandMiddle = require("../middlewares/brandMiddle")
const adminMiddleware = require('../middlewares/adminMiddleware')

router.get("/", brandsController.listBrands);

router.get("/create", adminMiddleware, brandsController.create);
router.post("/create", adminMiddleware, brandMiddle, brandsController.store);

router.get("/edit/:id", adminMiddleware, brandsController.editBrand);
router.put("/update/:id", adminMiddleware, brandsController.updateBrand);

router.delete("/delete/:id", adminMiddleware, brandsController.delete);

module.exports = router