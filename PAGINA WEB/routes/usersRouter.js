const express = require('express');
const router = express.Router();
const path = require('path');
//const { path } = require("express/lib/application");
const multer = require('multer');
const validations = require('../middlewares/userMiddle')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/img/users');
    },
    filename: (req, file, cb) => {
        console.log(file);
        let profileUser = `${Date.now()}_user${path.extname(file.originalname)}`;
        cb(null, profileUser);
    }
});

const uploadFile = multer({ storage });
const usersController = require("../controllers/usersController")

// formulario login
router.get("/login", usersController.login);
// procesamiento del login
router.post("/login", usersController.loginProcess);
// creacion del formulario
router.get("/register", usersController.register);
// procesamiento del formulario de creacion usuario
router.post("/register", uploadFile.single('avatar'), validations, usersController.processRegister);

router.get("/profile", usersController.profile);
module.exports = router