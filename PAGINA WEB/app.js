const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser')
const cookies= require('cookie-parser');
const multer = require("multer");
const session = require('express-session');
const bcrypt = require('bcryptjs');
const methodOverride = require('method-override');
const mainRouter = require("./routes/mainRouter");
const productRouter = require("./routes/productRouter");
const estiloRouter = require("./routes/estiloRouter");
const usersRouter = require("./routes/usersRouter");
const shoppingRouter = require("./routes/shoppingRouter");


const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");
const userLoginMiddleware = require('./middlewares/userLoginMiddleware');


app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(methodOverride("_method"))
app.use(express.static(path.resolve(__dirname, './public')));
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views'));


app.listen(3050, () => {
    console.log("Capsule Corp 3050")
});
app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false,
}));
app.use(cookies());
app.use(userLoggedMiddleware);
app.use("/", mainRouter)
app.use("/products", productRouter)
app.use("/users", usersRouter )
app.use(userLoginMiddleware)


//npm i -D nodemon para instalar nodemon
//npx nodemon app.js   para ejecutar
