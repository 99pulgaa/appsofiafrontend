import React from 'react';
import '../css/Menu.css';
import person from '../img/person.png';
import libreta from '../img/libreta.png';
import { Link } from 'react-router-dom';

export const Menu = () => {
    return (
        <div>
            <section className='formulariomenu'>
                <div align="center"><img src={person} width="200" height="200" /> </div>
                <h2 className="bienvenido">¡Bienvenido!</h2>
                <p className="queharas">¿Qué harás hoy?</p>
                <div className="imagenes">
                    <div className="reporte" onClick={() => { window.location.href = '/Reporte'; }}><img src={libreta} width="100" height="100" /> </div>
                    </div>
                    <div className="textos">
                        <h2 className="texto2"><Link className='zelda' to="/Reporte">REPORTES</Link></h2>
                    </div>
            </section>
        </div>
    );
}

export default Menu;