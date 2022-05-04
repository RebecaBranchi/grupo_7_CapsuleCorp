import React from "react";

function CardsUsers (props){ 
    return (
    <div className="cards">
        <h1>{props.user.first_name}</h1>
        <h1>{props.user.last_name}</h1>
        <h1>{props.user.email}</h1>
        <h1>{props.user.adress}</h1>
    </div>
    )}

    export default CardsUsers