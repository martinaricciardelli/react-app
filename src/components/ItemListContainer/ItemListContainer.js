import { useEffect, useState } from 'react'
import '../estilos/Card.css'
import ItemList from '../ItemList/ItemList'

const productos = () =>([
    {id:1, titulo:"Chocolate JSX", precio:"$200", stock: 20},
    {id:2, titulo:"Tramontana jQuery", precio:"$250", stock: 10},
    {id:3, titulo:"Banana Split Async", precio:"$250", stock: 15},
    {id:4, titulo:"Frutos del Bosque", precio:"$300", stock: 5}
])


const ItemListContainer = () => {

const [productosIniciales, setProductosIniciales] = useState([])

    useEffect (()=>{
        const mock_async = new Promise ((resolver)=> {
            setTimeout (()=> {
                resolver(productos)
            },2000)
        })
        mock_async
            .then((resultado)=>{
                setProductosIniciales(resultado)
                console.log (resultado)

            })

    })

        return (
            <>
                <ItemList productos={productosIniciales}/>
            </>
        )
}


export default ItemListContainer