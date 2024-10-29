import React from "react";
import "./navbar.css"
import CartWidget from "../CartWidget";

const NavBar = () => {
    return(
        <div className="nav">
            <h1>
                Kloudd
            </h1>
            <a href="/">Home</a>
            <a href="">Remera</a>
            <a href="">Pantalon</a>
            <a href="">Buzo</a>
            <CartWidget />
        </div>
    )
}
export default NavBar