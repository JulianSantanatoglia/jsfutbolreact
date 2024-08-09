import './ItemDetail'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'


const ItemDetail = ({ id, name, img, category, price, stock }) => {
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
        <div>
            {
                quantityAdded > 0 ? (
                    <Link to='/cart' className='Option'>Terminar la compra</Link>
                ) : (
                    <ItemCount initial={1} stock={9} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}></ItemCount>
                )
            }
        </div>
        {/* <Link to={`/item/${id}`} className='Option'>Ver detalle</Link> */}
        {/* <ItemCount initial={1} stock={9} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}></ItemCount> */}
        </div>
    )
}



export default ItemDetail