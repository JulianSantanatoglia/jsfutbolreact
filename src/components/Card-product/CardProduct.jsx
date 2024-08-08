import ItemCount from "../ItemCount/ItemCount"
import './CardProduct.css';
import { Link } from 'react-router-dom'
import { useState } from 'react'


const CardProduct = ({ id, name, img, category, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
    }


    return (
        <div className="card-container">
        <img className="camiseta-producto" src={img} alt={name} />
        <h2 className="card-header">{name}</h2>
        <p className="card-text card-price">€{price} <span className="card-text descuento-precio">100€</span></p>
        <p className="card-text card-price">{category}</p>
            {
                quantityAdded > 0 ? (
                    <Link to='/cart' className='Option'>Terminar con la compra</Link>
                ) : (
                    <ItemCount initial={1} stock={9} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}></ItemCount>
                )
            }
        {/* <Link to={`/item/${id}`} className='Option'>Ver detalle</Link> */}
        
        </div>
    )
}



export default CardProduct


