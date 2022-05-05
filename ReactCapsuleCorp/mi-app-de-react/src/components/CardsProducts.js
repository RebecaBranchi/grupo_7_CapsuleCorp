import React from "react";

function CardsProducts (props){ 
    return (
    <div className="cards2">
        <img className="imgProd" src={props.product.image}  width="80vw" alt="" />
        <h1>{props.product.name}</h1>
        <h1>$ {props.product.price}</h1>
        <h1>{props.product.discount}%</h1>
      
    </div>
    )}

    export default CardsProducts