const express = require("express");
const router=express.Router();
const trolleyController = require("../controllers/trolleyController")


router.get("/carrito",trolleyController.shopping);

module.exports = router