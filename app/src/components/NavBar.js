import React from 'react'
import CartWidget from "./CartWidget"
import './estilos/Card.css'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style= {{"background-color": "#f754cb"}}>
            <a className="navbar-brand" href="#">Helados Vanilla JS</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

        <div className="collapse navbar-collapse ms-4" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Inicio</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link"  href="#">Menú</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">Preguntas Frecuentes</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">Contacto</a>
                </li>
            </ul>
    
            <CartWidget/>
        </div>
        </nav>
      
    )
}

export default Nav