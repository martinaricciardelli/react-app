import React from 'react'
import './estilos/Card.css'

const CartWidget = () => {
    return (
        <div class="d-flex justify-content-end">
            <a href="#" class="material-icons">shopping_cart</a>
            <span className="number">0</span>

        </div>
    )
}

export default CartWidget