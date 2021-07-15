export const ItemDetailContainer = () => {

    return (
        <>
        <section className="Destacados">
        <div className="card">
            <img src={img} alt="Imagen"/>
            <h1 className="titulo">{titulo}</h1>
            <h3 className="titulo">{desc}</h3>
            <strong className="titulo">$ {precio}</strong>
            <ItemCount className="titulo" stock={stock}/>
            <button id="BotonAgre" className="titulo" >Agregar al Carrito!</button>
        </div>
        </section>
        </>
    )
  }