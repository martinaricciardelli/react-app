import React from 'react'
import '../estilos/Card.css'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    return (
        <>
        <div class="d-flex justify-content-end">
            <Link to="/cart" class="material-icons">shopping_cart</Link>
            <span className="number">0</span>
        </div>
        <p>soy el carrito</p>
        </>
    )
}

export default CartWidget