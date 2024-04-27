import React, { useState } from 'react';
import '../css/RecuperarPass.css';
import { Link, useNavigate } from 'react-router-dom';
import seguro from '../img/seguro.png';

export const RecuperarPass = () => {
    const [_contrasena, setContrasena] = useState('');
    const navigate = useNavigate();

    const handleContrasenaChange = (event) => {
        setContrasena(event);
    };

    function resetPassword() {
        let contrasena = _contrasena;

        const url = window.location.href;
        const urlObj = new URL(url);
        const queryParams = new URLSearchParams(urlObj.search);
        const id = queryParams.get('id');

        fetch(`http://localhost:8080/api/v1/clientes/${id}/resetPassword`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ contrasena }),
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
        resetPassword();
    };

    return (
        <div>
            <section className='bloque'>
                <form onSubmit={handleSubmit}>
                    <h4>CAMBIA LA CONTRASEÑA</h4>
                    <div align="center"><img src={seguro} width="74" height="74" /> </div>
                    <h3>!Digite su nueva contraseña!</h3>
                    <p class="ingresar">Pon la nueva contraseña de tu cuenta para recuperar el ingreso a ella.</p>
                    <input className="controls" type="password" minLength='8' name="pass" id="pass" placeholder="Contraseña" onChange={e => handleContrasenaChange(e.target.value)} required />
                    <button className='botonrecuperar' type="submit">Recuperar</button>
                </form>
            </section>
        </div>
    );
}

export default RecuperarPass;