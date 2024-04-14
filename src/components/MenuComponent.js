import React from 'react';
import '../css/MenuComponent.css';
import person from '../img/person.png';
import video from '../img/video.png';
import libreta from '../img/libreta.png';
import { Link } from 'react-router-dom';

export const MenuComponent = () => {
    return (
        <div>
            <section className='formulariomenu'>
                <div align="center"><img src={person} width="200" height="200" /> </div>
                <h2 className="bienvenido">¡Bienvenido!</h2>
                <p className="queharas">¿Qué harás hoy?</p>
                <form method="post" onSubmit>
                <div className="imagenes">
                    <div className="capacitar" onClick={() => { window.location.href = '../html/capacitar.html'; }}><img src={video} width="100" height="100" /> </div>
                    <div className="reporte" onClick={() => { window.location.href = '../html/entrega.html'; }}><img src={libreta} width="100" height="100" /> </div>
                    </div>
                    <div className="textos">
                        <h2 className="texto1"><Link to="../html/capacitar.html">CAPACITACIÓN</Link></h2>
                        <h2 className="texto2"><Link to="../html/entrega.html">REPORTES</Link></h2>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default MenuComponent;