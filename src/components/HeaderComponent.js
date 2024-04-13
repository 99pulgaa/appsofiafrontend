import React from 'react';
import logo from '../img/icon.png';
import '../css/HeaderComponent.css';

export const HeaderComponent = () => {
  return (
    <div>
      <header className='header'>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
          <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
              APPSOFIA
          </a>
          <h2 className="acercade" type="button" onclick="window.location.href='./html/acercade.html';">Acerca de</h2>
        </nav>
      </header>
    </div>
  )
}

export default HeaderComponent;