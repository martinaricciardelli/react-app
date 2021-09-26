import "../estilos/Card.css"

const ItemDetail = ({producto}) => {

        return (
            <div>
                 <div className= "card-producto" class="card mt-5 ms-5" style={{width: "18rem"}}>
                    <img src={producto.img} class="card-img-top" alt="..."/>
                     <div class="card-body bg-info">
                        <h5 class="card-title">{producto.titulo}</h5>
                        <p class="card-text">{producto.descripcion}</p> 
                        <p class="card-text">{producto.precio}</p>
                        <button id="btn-agregar" class="btn btn-primary mt-3" onClick={() => {alert('Compra realizada con éxito!')}}>Comprar</button>
                    </div>
                
            </div>
           </div>
        )
    }

    

export default ItemDetail