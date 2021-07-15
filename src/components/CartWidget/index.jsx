import './styles.css';
import logoCarrito from './images/carrito.svg';

export const CartWidget= () => {
    return (
        <div className="Carrito" >
            <img className="logoCarrito" src={logoCarrito} width="20" height="20" alt="" />
            <div className="carritoText">
                <ul>
                    <a href="carrito.html"><li className="carritoLi">Carrito</li></a>
                </ul>
            </div>
        </div>
    )
}