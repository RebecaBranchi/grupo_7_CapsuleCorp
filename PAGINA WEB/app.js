const express = require ("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const multer = require ("multer");
const session = require('express-session');
const bcrypt = require('bcryptjs');
const  methodOverride = require('method-override');
const mainRouter = require("./routes/mainRouter");
const productRouter = require("./routes/productRouter");
const estiloRouter = require("./routes/estiloRouter");
app.use(methodOverride("_method"))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());


const publicPath = "public";
app.use(express.static(publicPath))

app.set ("view engine", "ejs");
app.set('views', path.join(__dirname, '/views/'));


app.listen(3050, ()=>{
    console.log("Capsule Corp")
}); 

app.use("/",mainRouter)
app.use("/products",productRouter)


app.use(estiloRouter)
//npm i -D nodemon para instalar nodemon
//npx nodemon app.js   para ejecutar
