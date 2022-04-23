const express = require("express");
const router = express.Router();
const path = require("path");
const apiController = require("../../controllers/apiController/apiController");



router.get("/products", apiController.list);

router.get("/create");
router.post("/create");

router.get("/edit/:id");
router.put("/update/:id");

router.delete("/delete/:id");

module.exports = router