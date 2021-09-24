import Item from '../Item/Item'


const ItemList = ({productos}) => {
    return (
        <ul>
            {productos.map((producto,indice)=> {
                return <Item 
                producto={producto} 
                key={producto.id}/>

            })}
            
        </ul>
    )
}


export default ItemList