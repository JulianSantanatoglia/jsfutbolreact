import IconTrash from "../IconTrash/IconTrash";
import './ModalCart.css';

const ModalCart = () => {
    return (
        <div className="modal-container">
        <p className="modal-vacio">Tu carrito está vacio</p>
        <IconTrash />
        </div>
    )
}


export default ModalCart