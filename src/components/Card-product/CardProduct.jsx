import ItemCount from "../ItemCount/ItemCount"
import './CardProduct.css';


const CardProduct = ({ ImagenProducto, NombreCamiseta }) => {
    return (
        <div className="card-container">
        <img className="camiseta-producto" src={ ImagenProducto } alt="camiseta argentina" />
        <h2 className="card-header">{ NombreCamiseta }</h2>
        <p className="card-text card-price">30€ <span className="card-text descuento-precio">100€</span></p>
        <ItemCount initial={1} stock={9} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}></ItemCount>
        </div>
    )
}



export default CardProduct


