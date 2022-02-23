const express = require("express");

const router=express.Router();

const usersController = require ("../controllers/usersController")
router.get("/login", usersController.getLogin);
router.get("/register", usersController.getRegister);
module.exports = router