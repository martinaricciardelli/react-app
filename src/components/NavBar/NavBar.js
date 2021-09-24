import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import '../estilos/Card.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style= {{"background-color": "#f754cb"}}>
            <Link className="navbar-brand" to="/">Helados Vanilla JS</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

        <div className="collapse navbar-collapse ms-4" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Inicio</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link"  to="/seccion/menu">Menú</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/seccion/faq">Preguntas Frecuentes</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/seccion/contacto">Contacto</Link>
                </li>
            </ul>
    
            <CartWidget/>
        </div>
        </nav>
      
    )
}

export default Nav