
import { CardComponent } from '../../components/CardComponent';
import { ItemListContainer } from '../../components/ItemListContainer';
import { NavBar } from "../../components/NavBar";
import { useState } from 'react';
import '../HomeContainer/style.css';

export const HomeContainer = () => {
    const [cart, setCart] = useState([]);
        console.log(cart);
    return (
        <>
        <header className="navConteiner">
            <NavBar cart={cart}/>
        </header>
        <section>
            
        

            <ItemListContainer/>
        </section>
        </>
    )
}