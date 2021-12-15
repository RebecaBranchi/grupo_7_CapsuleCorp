const express = require ("express");
const app = express();
const path = require("path");


const publicPath = path.resolve(__dirname,"./public");
app.use(express.static(publicPath))

app.listen(3050, ()=>{
    console.log("Capsule Corp")
}); 

app.get("/", (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/index.html'))
})
app.get("/login", (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})

app.get("/productDetail", (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/productDetail.html'))
})

app.get("/creatucuenta", (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})

app.get("/carrito", (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/carrito.html'))
})
//npm i -D nodemon para instalar nodemon
//npx nodemon app.js   para ejecutar
