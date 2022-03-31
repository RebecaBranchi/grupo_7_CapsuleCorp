const express = require("express");
const router=express.Router();



const trolleyController = require("../controllers/trolleyController")


router.get("/cart",trolleyController.shopping);

router.post("/add/:id", trolleyController.add)

module.exports = router