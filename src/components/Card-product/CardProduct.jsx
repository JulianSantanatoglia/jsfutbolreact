import ItemCount from "../ItemCount/ItemCount"
import './CardProduct.css';
import { Link } from 'react-router-dom'
import { useState } from 'react'


const CardProduct = ({ id, name, img, category, price, stock }) => {



    return (
        <div className="card-container">
        <img className="camiseta-producto" src={img} alt={name} />
        <h2 className="card-header">{name}</h2>
        <p className="card-text card-price">€{price} <span className="card-text descuento-precio">100€</span></p>
        <p className="card-text card-price">Categoria: {category}</p>
        <p className="card-text card-price">Stock: {stock}</p>
        <button className="Option agregar-carrito">Ver Detalle</button>
        </div>

    )
}



export default CardProduct


