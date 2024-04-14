import React, { useEffect, useState } from 'react';
import logo from '../img/icon.png';
import '../css/HeaderComponent.css';


export const HeaderComponent = () => {
  const [_cliente, setCliente] = useState([]);
  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("user-complete") !== null) {
        setCliente(Array.from(localStorage.getItem("user-complete")));
      }
    } else {
      const URL =
        `http://localhost:8080/api/v1/clientes/${localStorage.getItem('user')}`;
      fetch(URL)
        .then((data) => data.json())
        .then((data) => {
          setCliente(data);
          localStorage.setItem("user-complete", JSON.stringify(data));
        })
    }
  }, []);


  function adminButton() {
    return (
      <h2 className="revision" type="button">Revisión</h2>
    );
  }

  return (
    <div>
      <header className='header'>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/InicioComponent">
            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            APPSOFIA
          </a>
          {
            _cliente.rol === 'ADMIN' ? adminButton() : ''
          }
          <h2 className="acercade" type="button" onclick="window.location.href='./html/acercade.html';">Acerca de</h2>
        </nav>
      </header>
    </div>
  )
}

export default HeaderComponent;