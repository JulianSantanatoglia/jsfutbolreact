import ItemCount from "../ItemCount/ItemCount"
import './CardProduct.css';


const CardProduct = ({ id, name, img, price, stock }) => {
    return (
        <div className="card-container">
        <img className="camiseta-producto" src={img} alt={name} />
        <h2 className="card-header">{name}</h2>
        <p className="card-text card-price">€{price} <span className="card-text descuento-precio">100€</span></p>
        <ItemCount initial={1} stock={9} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}></ItemCount>
        </div>
    )
}



export default CardProduct


