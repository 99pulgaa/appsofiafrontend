import React, { useEffect, useState } from 'react';
import logo from '../img/icon.png';
import '../css/Header.css';


export const Header = () => {
  const [_cliente, setCliente] = useState([]);

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("user-complete") !== null) {
        setCliente(Array.from(localStorage.getItem("user-complete")));
      }
    } else {
      if (localStorage.getItem("user") !== null) {
        const URL =
          `http://localhost:8080/api/v1/clientes/${localStorage.getItem('user')}`;
        fetch(URL)
          .then((data) => data.json())
          .then((data) => {
            setCliente(data);
            localStorage.setItem("user-complete", JSON.stringify(data));
          })
      }
    }
  }, []);


  function adminButton() {
    return (
      <div className='navbar-scroll'>
        <ul class="navbar-nav bd-navbar-nav flex-row">
          <li className='nav-item'>
            <a className='nav-link' href="/Revision">Revisión</a>
          </li>
        </ul>
      </div>
    );
  }

  const handleLogout = () => {
    // Borrar los datos relevantes del localStorage
    localStorage.clear();
  };

  function cerrarSesion() {
    if (_cliente.length !== 0) {
      return (
        <ul class="navbar-nav ml-md-auto">
          <li class="nav-item">
            <a class="nav-link" href="/Login" onClick={handleLogout} role="button" data-toggle="dropdown" aria-expanded="false">
              Cerrar sesión
            </a>
          </li>
        </ul>
      );
    } else {
      return ('');
    }
  }

  return (
    <div>
      <header className='header'>
        <nav className="navbar navbar-expand bg-light flex-column flex-md-row bd-navbar">
          <a className="navbar-brand" href="/Inicio">
            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            APPSOFIA
          </a>
          {
            _cliente.rol === 'ADMIN' ? adminButton() : ''
          }
          <div className='navbar-scroll'>
            <ul class="navbar-nav bd-navbar-nav flex-row">
              <li className='nav-item'>
                <a className='nav-link' onClick={() => { window.location.href = '/AcercaDe'; }}>Acerca de</a>
              </li>
            </ul>
          </div>
          {
            cerrarSesion()
          }
        </nav>
      </header>
    </div>
  )
}

export default Header;