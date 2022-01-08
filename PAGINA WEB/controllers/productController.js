const detalleProducto = (req,res)=>{
    res.render("products/productDetail")
};

const carrito = (req,res)=>{
    res.render("products/carrito")
};

const creareditar = (req,res)=>{
    res.render("products/createEdit")
};






module.exports ={
    detalleProducto,
    carrito,
    creareditar
}