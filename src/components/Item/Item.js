import '../estilos/Card.css'
import ItemCount from '../ItemCount/ItemCount'


const Item = (producto) => {
    return (
        <div>
             <div class="card mt-5 ms-5" style={{width: "18rem"}}>
                <img src={producto.img} class="card-img-top" alt="..."/>
                 <div class="card-body">
                    <h5 class="card-title">{producto.titulo}</h5>
                    <p class="card-text">{producto.precio}</p> 
                    <p class="card-text">{producto.stock}</p>
                </div>
            <ItemCount stock={10} initial={1} onAdd={()=>{}}/>
        </div>
       </div>
    )
}

export default Item