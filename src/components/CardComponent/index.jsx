import { ItemCount } from '../../components/ItemCount/ItemCount';
import './styles.css';

export const CardComponent = ({title, price, img, stock}) => {

    return (
        <div className="card">
            <img src={img} alt="Imagen"/>
            <h2>{title}</h2>
            <h2>{stock}</h2>
            <strong>$ {price}</strong>
            <ItemCount stock={stock}/>
        </div>
    )
}
