const express = require("express");
const multer = require("multer");
const router = express.Router();

const fileStorageEngine = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/users');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}--${file.originalname}`)
    }
});

const upload = multer({ storage: fileStorageEngine });
const usersController = require("../controllers/usersController")

router.get("/login", usersController.getLogin);
router.get("/register", usersController.getRegister);
router.post("/register", upload.single('image'),usersController.getRegister);
module.exports = router