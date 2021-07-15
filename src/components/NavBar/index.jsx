import './styles.css';
import { CartWidget } from '../../components/CartWidget';
import logo from './images/logo.svg';


export const NavBar = ({cart}) => {
    return (
        <div>
            <div className="navbar">
                <nav>
                    <img className="logo" src={logo} width="160" height="160" alt=""/>
                    <ul className="UlNav">
                        <a href="index.html"><li>Inicio</li></a>
                        <a href="index.html"><li>Productos</li></a>
                        <a href="index.html"><li>Nosotros</li></a>
                        <CartWidget/>
                        <li>Carrito: {cart.length}</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}