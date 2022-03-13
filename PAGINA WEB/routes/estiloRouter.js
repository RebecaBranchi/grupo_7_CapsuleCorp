const express = require("express");

const router=express.Router();

const estiloController = require ("../controllers/estiloController")

router.get("/estilo", estiloController.getStyle);



module.exports = router