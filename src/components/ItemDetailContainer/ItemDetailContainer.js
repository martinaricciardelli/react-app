import ItemDetail from "../ItemDetail/ItemDetail"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


const productosDelServer = () =>([
    {id:1, titulo:"Chocolate JSX", precio:"$200", category: "chocolate", stock: 20, img:"https://recetastips.com/wp-content/uploads/2020/05/helado-de-chocolate-6-1.jpg"},
    {id:2, titulo:"Chocolate con Almendras JSX", precio:"$230",category: "chocolate", stock: 12, img:"https://www.demoslavueltaaldia.com/sites/default/files/helado-chocolate-almendras.jpg"},
    {id:3, titulo:"Chocolate Marroc JSX", precio:"$260", category: "chocolate", stock: 7, img:"https://nubing.s3.amazonaws.com/apps/5408c30a-cc99-40c8-83a5-166506aea3ea.jpg"},
    {id:4, titulo:"Tramontana jQuery", precio:"$250", category: "crema", stock: 10, img: "https://static.misionesonline.news/wp-content/uploads/2021/04/En-alta_Tramontana-e1619019644769-730x431.jpg"},
    {id:5, titulo:"Banana Async Split ", precio:"$250", category: "crema", stock: 15, img: "https://t1.rg.ltmcdn.com/es/images/9/2/8/helado_de_banana_casero_72829_paso_3_600.jpg"},
    {id:6, titulo:"Framework del Bosque", precio:"$300", category: "crema", stock: 5, img: "https://recetasfacilesdeirene.com/wp-content/uploads/2020/07/helado-frutos-rojos-receta.jpg"},
    {id:7, titulo:"Limón al AJAX", precio:"$150", category: "frutal", stock: 11, img: "https://cdn.cienradios.com/wp-content/uploads/sites/13/2020/09/helado-1.jpg"},
    {id:8, titulo:"Frambuesa al AJAX", precio:"$170", category:"frutal", stock: 6, img: "https://static.vix.com/es/sites/default/files/imj/elgranchef/S/Sorbete-de-frambuesa-y-chocolate-1.jpg"},
    {id:9, titulo:"Naranja al AJAX", precio:"$170", category: "frutal", stock: 6, img: "https://ugc.kn3.net/i/760x/http://2.bp.blogspot.com/-JnhIqaNUvfs/Tw2kDO019OI/AAAAAAAAAus/CdeQenKcjZk/s400/helado+de+naranja.jpg"},
    {id:10, titulo:"Dulce de Leche", precio:"$210", category: "ddl", stock: 25, img: "https://placeralplato.com/files/2015/08/helado-de-dulce-de-leche-640x480.jpg?width=1200&enable=upscale"},
    {id:11, titulo:"Dulce de Leche Granizado", precio:"$250", category: "ddl", stock: 19, img: "https://www.argentina.gridohelado.com/wp-content/uploads/2016/06/dulcedeleche-granizado.jpg"},
    {id:12, titulo:"Dulce de Leche Brownie", precio:"$270", category: "ddl", stock: 14, img:"https://www.argentina.gridohelado.com/wp-content/uploads/2016/06/dulcedeleche-brownie.jpg" },
])


const ItemDetailContainer = () => {

const [producto, setProducto] = useState([]);
const {id} = useParams();


    useEffect (()=>{
        const mock_async = new Promise ((resolver)=> {
            setTimeout (()=> {
                resolver(productosDelServer)
            },2000)
        })
        mock_async
            .then(productos => {
                const producto = productos.find(producto => producto.id == id);
                setProducto(producto);
            })

    },[])

        return (
            <>
                <ItemDetail producto={producto}/>
            </>    
        )
}




export default ItemDetailContainer