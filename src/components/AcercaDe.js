import React from 'react';
import '../css/AcercaDe.css';
import txtlogo2 from '../img/txtlogo2.png';

export const AcercaDe = () => {
    return (
        <div>
            <section className='formularioacerca'>
                <div align="center"><img className='logo2' src={txtlogo2} /> </div>
                <p class="info">Somos una página web en la que puedes hacer reportes médicos sobre incapacidades  y calamidades laborales.</p>
                <hr></hr>
        
            </section>
        </div>
    );
}

export default AcercaDe;