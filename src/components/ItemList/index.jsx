import { Item } from '../Item';
import '../ItemList/style.css';

export const ItemList = () => {

    return (
        <>
        <section className="prods">
            <Item img= {"aca va la img"} titulo={'Dulce de leche Eureka x 10 kg'} precio={2350} descripcion= {'Dulce de leche repostero.'} stock ={10} />
            <Item img= {"aca va la img"} titulo={'Baño Semiamargo Águila x 1 kg'} precio={490} descripcion = {'Baño de repostería x 1 kg.'} stock ={10}/>
            <Item img= {"aca va la img"} titulo={'Bettercreme Rich´s x 907cc'} precio={340} descripcion = {'Bettercreme sabor chantilly.'} stock ={10}/>
            <Item img= {"aca va la img"} titulo={'Frutos Rojos IQF con Frambuesa x 1 kg'} precio={950} descripcion = {'Frutos rojos premium.'} stock ={10}/>
            <Item img= {"aca va la img"} titulo={'Galletitas Oreo x 354 gr'} precio={210} descripcion = {'Galletitas Oreo pack x 3.'} stock ={10}/>
            <Item img= {"aca va la img"} titulo={'Manteca Inty x 10 kg'} precio={340} descripcion = {'Bettercreme sabor chantilly.'} stock ={10}/>
        </section>
        </>
    )
}