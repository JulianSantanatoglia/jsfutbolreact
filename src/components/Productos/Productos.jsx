import CardProduct from '../Card-product/CardProduct';
import './Productos.css';

const Productos = () => {
    return (
        <div className="flex-productos">
        <CardProduct NombreCamiseta={'Camiseta Argentina'} ImagenProducto={"./src/components/Card-product/assets/camiseta-arg.jpg"}/>
        <CardProduct NombreCamiseta={'Camiseta España'} ImagenProducto={"./src/components/Card-product/assets/camiseta-esp.jpg"}/>
        <CardProduct NombreCamiseta={'Camiseta Alemania'} ImagenProducto={"./src/components/Card-product/assets/camiseta-ale.jpg"}/>
        <CardProduct NombreCamiseta={'Camiseta Francia'} ImagenProducto={"./src/components/Card-product/assets/camiseta-francia.jpg"}/>
        <CardProduct NombreCamiseta={'Camiseta Brasil'} ImagenProducto={"./src/components/Card-product/assets/camiseta-brasil.jpg"}/>
        <CardProduct NombreCamiseta={'Camiseta Inglaterra'} ImagenProducto={"./src/components/Card-product/assets/camiseta-inglaterra.jpg"}/>
        </div>
    )
}

export default Productos