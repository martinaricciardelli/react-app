import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import '../estilos/Card.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style= {{"background-color": "#f754cb"}}>
            <NavLink activeClassName="active" className="navbar-brand" to="/">Helados Vanilla JS</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

        <div className="collapse navbar-collapse ms-4" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink activeClassName="active" className="nav-link" to="/">Inicio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="active" className="nav-link" to="/item/ddl">Dulce de Leche</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="active" className="nav-link" to="/item/chocolate">Chocolate</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="active" className="nav-link" to="/item/cremas">Cremas</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="active" className="nav-link" to="/item/frutales">Frutales</NavLink>
                </li>
            </ul>
    
            <CartWidget/>
        </div>
        </nav>
      
    )
}

export default Nav