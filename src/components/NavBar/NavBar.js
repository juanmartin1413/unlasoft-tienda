import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';


export default function NavBar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">UNLASOFT</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">QUIENES SOMOS</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">SERVICIOS</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">SOFTWARE</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        PRODUCTOS
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">ALMACENAMIENTO</a></li>
                        <li><a className="dropdown-item" href="#">COMPUTADORAS DE ESCRITORIO</a></li>
                        <li><a className="dropdown-item" href="#">PROCESADORES</a></li>
                        <li><a className="dropdown-item" href="#">MOTHERBOARDS</a></li>
                        <li><a className="dropdown-item" href="#">MEMORIAS RAM</a></li>
                        <li><a className="dropdown-item" href="#">GABINETES</a></li>                   
                        <li><a className="dropdown-item" href="#">MONITORES</a></li>
                        <li><a className="dropdown-item" href="#">PERIFERICOS</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">RIGS DE MINERIA</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">CONTACTO</a>
                    </li>
                </ul>
                <span id='btnCart' className='btnNavBar btn m-2'>
                    <CartWidget/>
                </span> 
                <form className="d-flex">
                    <input className="form-control me-2" type="search" aria-label="Search"/>
                    <button className="btn btn-outline-success btnNavBar text-white" type="submit">Buscar</button>
                </form>
                </div>
            </div>
        </nav>
    );
};