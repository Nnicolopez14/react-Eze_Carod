import React, { useState } from 'react'
import Button from '../Button'

let productos = [
{categoria: "remera",
    nombre: "Remera Kloudd Gris",
},
{
    categoria:"pantalon",
    nombre:"Jogging Negro Kloudd"
},
{
    categoria: "buzo",
    nombre: "Buzo Negro Kloudd"
},
{
    categoria: "buzo",
    nombre: "Buzo Blanco Kloudd"
}, 
{
    categoria: "remera",
    nombre: "Remera Kloudd Blanca"
}, 
]

export const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState(productos)

    const showRemera = () => {
        let res = products.filter(e=>e.categoria === "remera")
        setProducts(res)
}
    const showBuzo = () => {
        let res = products.filter(e=>e.categoria === "buzo")
        setProducts(res)
}
const showPantalon = () => {
    let res = products.filter(e=>e.categoria === "pantalon")
    setProducts(res)
}


    const showAll = ()=> {  
    setProducts(productos)
}


console.log("se renderiza ILC")


return (
    <div>
        <button onClick={showRemera}>remera</button>
        <button onClick={showPantalon}>pantalon</button>
        <button onClick={showBuzo}>buzo</button>
        <button onClick={showAll}>todos</button>
        {products.map((product) => {
        return(
            <>
            <h3>{product.categoria}</h3>


            <h3>{product.nombre}</h3>   
            </>
    )}
    )}
    </div>
    )
}