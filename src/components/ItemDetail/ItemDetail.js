import "../estilos/Card.css"
import "../ItemCount/ItemCount"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({producto}) => {

        return (
            <div>
                 <div className= "card-producto" class="card mt-5 ms-5" style={{width: "18rem"}}>
                    <img src={producto.img} class="card-img-top" alt="..."/>
                     <div class="card-body bg-info">
                        <h5 class="card-title">{producto.titulo}</h5>
                        <p class="card-text">{producto.descripcion}</p> 
                        <p class="card-text">{producto.precio}</p>
                        <ItemCount stock={10} initial={1} onAdd={()=>{}}/>                 
                    </div>
                
            </div>
           </div>
        )
    }

    

export default ItemDetail