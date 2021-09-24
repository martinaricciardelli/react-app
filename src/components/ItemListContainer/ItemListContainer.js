import { useEffect, useState } from 'react'
import '../estilos/Card.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const productos = () =>([
    {id:1, titulo:"Chocolate JSX", precio:"$200", stock: 20, img:"https://recetastips.com/wp-content/uploads/2020/05/helado-de-chocolate-6-1.jpg"},
    {id:2, titulo:"Tramontana jQuery", precio:"$250", stock: 10, img: "https://static.misionesonline.news/wp-content/uploads/2021/04/En-alta_Tramontana-e1619019644769-730x431.jpg"},
    {id:3, titulo:"Banana Async Split ", precio:"$250", stock: 15, img: "https://t1.rg.ltmcdn.com/es/images/9/2/8/helado_de_banana_casero_72829_paso_3_600.jpg"},
    {id:4, titulo:"Framework del Bosque", precio:"$300", stock: 5, img: "https://recetasfacilesdeirene.com/wp-content/uploads/2020/07/helado-frutos-rojos-receta.jpg"}
])


const ItemListContainer = () => {

const [productosIniciales, setProductosIniciales] = useState([])
const parametros = useParams ()

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

    },[])

        return (
            <>
                <ItemList productos={productosIniciales}/>
                
            </>
        )
}


export default ItemListContainer