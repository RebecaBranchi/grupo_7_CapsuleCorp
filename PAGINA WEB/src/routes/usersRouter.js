const express = require("express");
const path = require('path');
//const { path } = require("express/lib/application");
const multer = require("multer");
const router = express.Router();
//const validations = requiere('')
const fileStorageEngine = multer.diskStorage({
        destination: function (req, file, cb) {
        const folder = path.join(__dirname, '../public/users');
        cb(null, folder);
    },
    filename: function (req, file, cb) {
        const profile = 'user-'+Date.now() + path.extname(file.orinalname)
        cb(null, profile)
    }
});

const upload = multer({ storage: fileStorageEngine });
const usersController = require("../controllers/usersController")
// formulario login
router.get("/login", usersController.login);
// creacion del formulario
router.get("/register", usersController.register);
// procesamiento del formulario de creacion usuario
router.post("/profile", upload.single('image'),usersController.register);

module.exports = router