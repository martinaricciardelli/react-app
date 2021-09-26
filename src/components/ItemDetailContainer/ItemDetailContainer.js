import ItemDetail from "../ItemDetail/ItemDetail"
import { useState, useEffect } from "react"


const products = () =>([
    {id:1, titulo:"Chocolate JSX", precio:"$200", descripcion:"Helado de chocolate con chips de chocolate", img:"https://recetastips.com/wp-content/uploads/2020/05/helado-de-chocolate-6-1.jpg"},
    {id:2, titulo:"Tramontana jQuery", precio:"$250", descripcion:"Helado de americana con chips de chocolate y dulce de leche", stock: 10, img: "https://static.misionesonline.news/wp-content/uploads/2021/04/En-alta_Tramontana-e1619019644769-730x431.jpg"},
    {id:3, titulo:"Banana Async Split ", precio:"$250", descripcion:"Helado de banana con chips de chocolate y dulce de leche", stock: 15, img: "https://t1.rg.ltmcdn.com/es/images/9/2/8/helado_de_banana_casero_72829_paso_3_600.jpg"},
    {id:4, titulo:"Framework del Bosque", precio:"$300", descripcion:"Helado de americana con frutos del bosque", stock: 5, img: "https://recetasfacilesdeirene.com/wp-content/uploads/2020/07/helado-frutos-rojos-receta.jpg"}
])


const ItemDetailContainer = () => {

const [productsIniciales, setProductsIniciales] = useState([])


    useEffect (()=>{
        const mock_async = new Promise ((resolver)=> {
            setTimeout (()=> {
                resolver(products)
            },2000)
        })
        mock_async
            .then((resultado)=>{
                setProductsIniciales(resultado)
                console.log (resultado)

            })

    },[])

        return (
            
            <div>
                <ul>
                    {
                    productsIniciales.map(producto => <ItemDetail producto= {producto} key={producto.id}/>)
                    }
                </ul>
            </div>
        
            
        )
}




export default ItemDetailContainer