import React, { Component } from 'react';
import logo from './assets/logo.jpg';
import './style.css'

class Navbar extends Component {
  render(){
    return (
        <section>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <a className="navbar-brand" href="#">
                    <form className="form-inline"></form>
                    <img className="logoimg" src={logo} alt="Nav Bar Logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="./">Inicio <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categoria</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Tortas</a>
                                <a className="dropdown-item" href="#">Quesadillas</a>
                                <a className="dropdown-item" href="#">Gorditas</a>
                                <a className="dropdown-item" href="#">Tacos</a>
                                <a className="dropdown-item" href="#">Pambazos</a>
                                <a className="dropdown-item" href="#">Flautas</a>
                                <a className="dropdown-item" href="#">Tlacoyos</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown form-inline">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Registro</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="./registerLocal">Locales</a>
                                <a className="dropdown-item" href="./registerGarnachero">Garnachero</a>
                                <div className="dropdown-divider"></div>
                            </div>
                        </li>
                    </ul>
                    <form class="form-inline my-3 my-lg-0">
                        <input className="form-control mr-sm-3" type="search" placeholder="Busqueda en la pagína"aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>
        </section>
    );
  }
}

export default Navbar;