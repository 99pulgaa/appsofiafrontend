import React from 'react';
import '../css/InicioComponent.css';
import txtlogo2 from '../img/txtlogo2.png';
import { Link } from 'react-router-dom';


export const InicioComponent = () => {
    return (
        <div>
            <div className='formularioinicio'>
                <div align="center"><img src={ txtlogo2 } width="480" height="320"/> </div>
                <p className="report">¡Haz tu reporte aquí!</p>
                <Link to="/LoginComponent">
                    <button className='botonreportar' type="submit">Reportar</button>
                </Link>
            </div>
        </div>
    );
}

export default InicioComponent;