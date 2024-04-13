import React, { useState } from 'react';
import '../css/RegistroComponent.css';
import { validarRegistro, validarEmail } from '../components/validar.js';
import { Link } from 'react-router-dom';

export const RegistroComponent = () => {
    const [_cedula, setCedula] = useState('');
    const [_nombre, setNombre] = useState('');
    const [_fechaNacimiento, setFechaNacimiento] = useState(null);
    const [_email, setEmail] = useState('');
    const [_contrasena, setContrasena] = useState('');

    const handleCedulaChange = (event) => {
        setCedula(event);
    };

    const handleNombreChange = (event) => {
        setNombre(event);
    };

    const handleFechaNacimientoChange = (event) => {
        setFechaNacimiento(event);
    };

    const handleEmailChange = (event) => {
        setEmail(event);
    };

    const handleContrasenaChange = (event) => {
        setContrasena(event);
    };

    function createCliente() {
        let id = _cedula;
        let nombre = _nombre;
        let fechaNacimiento = new Date(_fechaNacimiento.replace(/-/g, '\/'));
        let email = _email;
        let contrasena = _contrasena;
    
        fetch('http://localhost:8080/api/v1/clientes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, nombre, fechaNacimiento, email, contrasena }),
        }).then(response => {
            if (response.ok) {
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
        createCliente();
    };

    return (
        <div>
            <section className='bloque'>
                <form onSubmit={handleSubmit}>
                    <h4>REGISTRO</h4>
                    <input className="controls" minLength='8' maxLength='10' type="text" name="documento" id="documento" placeholder="Documento" onChange={e => handleCedulaChange(e.target.value)} required />
                    <input className="controls" type="text" name="nombre" id="nombre" placeholder="Nombre completo" onChange={e => handleNombreChange(e.target.value)} required />
                    <input className="controls" type="date" name="fecha" id="fecha" placeholder="Fecha" onChange={e => handleFechaNacimientoChange(e.target.value)} required />
                    <input className="controls" type="email" name="email" id="email" placeholder="Email" onChange={e => handleEmailChange(e.target.value)} required />
                    <input className="controls" type="password" minLength='8'name="pass" id="pass" placeholder="Contraseña" onChange={e => handleContrasenaChange(e.target.value)} required />
                    <p>Estoy de acuerdo con <a href="#">Términos y condiciones</a></p>
                    <button className='botonregistrar' type="submit">Regístrate</button>
                    <Link to="/LoginComponent">
                        <p className="yatengo">Ya tengo cuenta</p>
                    </Link>
                </form>
            </section>
        </div>
    );
}

export default RegistroComponent;