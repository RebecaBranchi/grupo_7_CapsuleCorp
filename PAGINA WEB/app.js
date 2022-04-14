const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser')
const cookies= require('cookie-parser');
const multer = require("multer");
const session = require('express-session');
const bcrypt = require('bcryptjs');
const methodOverride = require('method-override');

// Router//
const mainRouter = require("./routes/mainRouter");
const productRouter = require("./routes/productRouter");
const usersRouter = require("./routes/usersRouter");
const shoppingRouter = require("./routes/shoppingRouter");
const colorRouter = require("./routes/colorRouter");
const categoryRouter = require("./routes/categoryRouter");
const brandRouter = require("./routes/brandRouter");
const apiRouter = require ("./routes/api/apiRouter")

//Middleware///
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");
const userLoginMiddleware = require('./middlewares/userLoginMiddleware');



// Req.body //
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Form Put and delete
app.use(methodOverride("_method"))


// Public Static///
app.use(express.static(path.resolve(__dirname, './public')));

/// Engine EJS//
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views'));



app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false,
}));
app.use(cookies());


app.use(userLoggedMiddleware);


///Routes ///
app.use("/", mainRouter);
app.use("/products", productRouter);
app.use("/users", usersRouter );
app.use("/shopping", shoppingRouter );
app.use("/color",colorRouter);
app.use("/category",categoryRouter);
app.use("/brand",brandRouter);
app.use("/api",apiRouter)


app.use(userLoginMiddleware)


//Initial////
app.listen(3050, () => {
    console.log("Capsule Corp 3050")
});

//npm i -D nodemon para instalar nodemon
//npx nodemon app.js   para ejecutar
