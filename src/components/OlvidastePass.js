import React, { useState } from 'react';
import '../css/OlvidastePass.css';
import  {Link, useNavigate} from 'react-router-dom';
import seguro from '../img/seguro.png';

export const OlvidastePass = () => {
    const [_email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event);
    };


    function sendEmail() {
        let email = _email;
    
        fetch('http://localhost:8080/api/v1/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email }),
        }).then(response => {
            if (response.ok) {
                navigate('/Login');
                return response.text();
            } else {
                throw new Error('Failed to create cliente');
            }
        }).then(text => {
            console.log(text);
        }).catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        sendEmail();
    };

    return (
        <div>
            <section className='bloque'>
                <form onSubmit={handleSubmit}>
                    <h4>¿OLVIDASTE TU CONTRASEÑA?</h4>
                    <div align="center"><img src={ seguro } width="74" height="74"/> </div>
                    <h3>¿Problemas para ingresar a tu cuenta?</h3>
                    <p class="ingresar">Ingresa tu Email y te enviaremos un correo para que puedas cambiar tu contraseña.</p>
                    <input className="controls" type="email" name="email" id="email" placeholder="Email" onChange={e => handleEmailChange(e.target.value)} required />
                    <button className='botonrecuperar' type="submit">Recuperar</button>
                    <Link to="/Login">
                        <p className="yatengo">Volver al login</p>
                    </Link>
                </form>
            </section>
        </div>
    );
}

export default OlvidastePass;