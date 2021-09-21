import '../estilos/Card.css'

const Item = (producto) => {
    return (
        <div>
             <div class="card mt-5 ms-5" style={{width: "18rem"}}>
                <img src="https://recetastips.com/wp-content/uploads/2020/05/helado-de-chocolate-6-1.jpg" class="card-img-top" alt="..."/>
                 <div class="card-body">
                    <h5 class="card-title">{producto.titulo}</h5>
                    <p class="card-text">{producto.precio}</p>
                    
                </div>
        </div>
       </div>
    )
}

export default Item