import { Link } from 'react-router-dom'
import '../estilos/Card.css'
import ItemList from '../ItemList/ItemList'


const Item = ({producto}) => {
    return (
        <div>
            <div className="card-container">
             <div className="card mt-5 ms-5" style={{width: "18rem"}}>
                <img src={producto.img} class="card-img-top" alt="..."/>
                 <div className="card-body">
                    <h5 className="card-title">{producto.titulo}</h5>
                    <p className="card-text">Stock disponible: {producto.stock}</p>
                    <Link to={`/item/${producto.id}`}>Ver detalles</Link>
                    
                </div>
             </div>
            </div>
            
       </div>
    )
}

export default Item