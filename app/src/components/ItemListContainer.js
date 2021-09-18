import './estilos/Card.css'
import './ItemCount'
import ItemCount from './ItemCount'

const ItemListContainer = ({mensaje}) => {
    return (
        <>
            <p className="mensaje">{mensaje}</p>
            <div class="card mt-5 ms-5" style={{width: "18rem"}}>
                <img src="https://recetastips.com/wp-content/uploads/2020/05/helado-de-chocolate-6-1.jpg" class="card-img-top" alt="..."/>
                 <div class="card-body">
                    <h5 class="card-title">Chocolate JSX</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                </div>
                <ItemCount stock={10} initial={1} onAdd={()=>{}}/>
            </div>
            

        </>
    )
}

export default ItemListContainer