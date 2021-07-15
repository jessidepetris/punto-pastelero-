import { ItemList } from "../ItemList";
import { useEffect, useState } from "react";
import { getData } from '../../utils/const';

export const ItemListContainer = () => {
  let [productos, setProductos] = useState([]);

  useEffect(() => {
    const waitForData = async () => {
    let data = await getData('zapatillas');
    let aux = data.map(element => {
      return {
        title: element.title,
        img: element.thumbnail,
        price: element.price
      }
    });
    setProductos(aux);
  }

  waitForData();
}, [])

  if (productos.length > 0) {
    console.log(productos);
  }

  return (
    <div>
    <div >
      {productos.length === 0 ? 'CargandoProductos' : 'Cargado...'}
      {productos.map((element,index) => {
        return (
          <span key={index}>
            <ItemList titulo={element.titulo} precio={element.precio} desc={element.desc} />
          </span>
        )
      })}
    </div>
    </div>
  )
}