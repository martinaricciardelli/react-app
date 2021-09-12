import React from 'react'
import CartWidget from "./CartWidget"
import './estilos/Card.css'

const Nav = () => {
    return (
        <nav className="menu">
            <a className="link" href="#">Inicio</a>
            <a className="link" href="#">Menú</a>
            <a className="link" href="#">Preguntas Frecuentes</a>
            <a className="link" href="#">Contacto</a>
            <CartWidget/>
        </nav>
      
    )
}

export default Nav