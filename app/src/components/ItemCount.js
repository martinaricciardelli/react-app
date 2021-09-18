import { useState } from "react"
import './estilos/Card.css'

const ItemCount = ({stock, initial, onAdd}) => {
    const  [contador, setContador] = useState(initial)
    
    const handleSum = () => {
        setContador(contador + 1);
    }
  
    const handleSubstract = () => {
        if (contador === 0) {
            return
        }
        setContador(contador - 1);
    }
    

    return (
        <>
            <div className="btn-wrapper">
                <button class="btn btn-primary me-3" onClick={handleSubstract}>-</button>
                <span>{contador}</span>
                <button class="btn btn-primary ms-3" onClick={handleSum}>+</button>
            </div>
            <button id="btn-agregar" class="btn btn-primary mt-3" onClick={() => {alert('Producto agregado al carrito')}}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount