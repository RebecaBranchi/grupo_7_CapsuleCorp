const express = require("express");
const router=express.Router();



const trolleyController = require("../controllers/trolleyController")


router.get("/cart",trolleyController.shopping);

module.exports = router