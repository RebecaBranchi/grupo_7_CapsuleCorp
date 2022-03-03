const express = require('express');
const path = require('path');
//const { path } = require("express/lib/application");
const multer = require('multer');
const router = express.Router();
const { body } = require('express-validator')
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
const validations= [
    body('first_name').notEmpty().withMessage('Tienes que escribir tu nombre'),
    body('last_name')
    .notEmpty().withMessage('Tienes que escribirt tu apellido'),
    body('email').notEmpty().withMessage('Tienes que escribir un correo electronico').bail().isEmail().withMessage('Debes escribir un correo electronico válido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('avatar').custom((value, { req })=>{
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];
        

        if(!file){
            throw new Error('Tienes que subir una imagen');
        }else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`las extensiones del archivo permitidas son ${acceptedExtensions.join(',')} `);
            }
        }
       
        return true;
    })
]   
// formulario login
router.get("/login", usersController.login);
// creacion del formulario
router.get("/register", usersController.register);
// procesamiento del formulario de creacion usuario
router.post("/register", uploadFile.single('avatar'), validations, usersController.processRegister);

router.get("/profile/:id", usersController.profile);
module.exports = router