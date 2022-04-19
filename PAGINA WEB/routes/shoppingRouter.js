const express = require("express");
const router = express.Router();
const authMiddLeware = require('../middlewares/authMiddleware')


const trolleyController = require("../controllers/trolleyController")


router.get("/cart", authMiddLeware, trolleyController.shopping);

router.post("/add/:id", authMiddLeware, trolleyController.add)

module.exports = router