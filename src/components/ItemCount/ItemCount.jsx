import { useState } from "react";
import './ItemCount.css';

const ItemCount = () => {
    const [cantidad, setCantidad] = useState(1)


    const handleClickMenos = () => {
        if (cantidad === 1 ) {
            alert("Seleccionar minimo un producto");
        }
        setCantidad(cantidad - 1);
    };

    const handleClickMas = () => {
        setCantidad(cantidad + 1);
    };


    return (
        <div className="count-container">
            <button className="item-count" onClick={handleClickMenos}>-</button>
            <span className="number-count">{cantidad}</span>
            <button className="item-count" onClick={handleClickMas}>+</button>
        </div>
    );
}

export default ItemCount;

