import { ItemCount } from '../../components/ItemCount/ItemCount';
import { useState } from 'react';
import './styles.css';
import { NavBar } from "../../components/NavBar";

export const Item = ({titulo, precio, stock, desc, img}) => {
    const [cart, setCart] = useState([]);
        console.log(cart);

    return (
        <div className="card">
            <img src={img} alt="Imagen"/>
            <h1 className="titulo">{titulo}</h1>
            <h3 className="titulo">{desc}</h3>
            <strong className="titulo">$ {precio}</strong>
            <ItemCount className="titulo" stock={stock}/>
            <button id="BotonAgre"onClick={() => {setCart([...cart,{ id: 1 , name:'jess' }]) }}>AGREGAR AL CARRITO</button>
        </div>
    
    )
}