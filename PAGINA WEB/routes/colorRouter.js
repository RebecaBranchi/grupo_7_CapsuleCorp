const express = require ("express");
const router = express.Router();
const path = require("path");
const colorsController = require ("../controllers/colorsController");
const colorMiddle = require("../middlewares/colorMiddle")




router.get("/",colorsController.listColors);

router.get("/create",colorsController.create);
router.post("/create",colorMiddle,colorsController.store);

router.get("/edit/:id",colorsController.editColor);
router.put("/update/:id",colorsController.updateColor);

router.delete("/delete/:id",colorsController.delete);

module.exports = router