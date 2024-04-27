import React, { useState } from 'react';
import '../css/Registro.css';
import { Link, useNavigate } from 'react-router-dom';

export const Registro = () => {
    const [_cedula, setCedula] = useState('');
    const [_nombre, setNombre] = useState('');
    const [_fechaNacimiento, setFechaNacimiento] = useState(null);
    const [_email, setEmail] = useState('');
    const [_contrasena, setContrasena] = useState('');
    const [incorrect, setIncorrect] = useState(false);
    const navigate = useNavigate();

    const handleCedulaChange = (event) => {
        setCedula(event);

        if (event === '') {
            setIncorrect(false)
        }
    };

    const handleNombreChange = (event) => {
        setNombre(event);

        if (event === '') {
            setIncorrect(false)
        }
    };

    const handleFechaNacimientoChange = (event) => {
        setFechaNacimiento(event);

        if (event === '') {
            setIncorrect(false)
        }
    };

    const handleEmailChange = (event) => {
        setEmail(event);

        if (event === '') {
            setIncorrect(false)
        }
    };

    const handleContrasenaChange = (event) => {
        setContrasena(event);

        if (event === '') {
            setIncorrect(false)
        }
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
                navigate('/Login');
                return response.text();
            } else {
                setIncorrect(!incorrect);
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

    function error() {
        return (
            <label style={{
                color:'red'
            }}>El documento o correo ya estan registrados</label>
        );
    }

    return (
        <div>
            <section className='bloque'>
                <form onSubmit={handleSubmit}>
                    <h4>REGISTRO</h4>
                    <input className={incorrect ? 'controls error' : 'controls'} minLength='8' maxLength='10' type="text" name="documento" id="documento" placeholder="Documento" onChange={e => handleCedulaChange(e.target.value)} required />
                    <input className={incorrect ? 'controls error' : 'controls'} type="text" name="nombre" id="nombre" placeholder="Nombre completo" onChange={e => handleNombreChange(e.target.value)} required />
                    <input className={incorrect ? 'controls error' : 'controls'} type="date" name="fecha" id="fecha" placeholder="Fecha" onChange={e => handleFechaNacimientoChange(e.target.value)} required />
                    <input className={incorrect ? 'controls error' : 'controls'} type="email" name="email" id="email" placeholder="Email" onChange={e => handleEmailChange(e.target.value)} required />
                    <input className={incorrect ? 'controls error' : 'controls'} type="password" minLength='8' name="pass" id="pass" placeholder="Contraseña" onChange={e => handleContrasenaChange(e.target.value)} required />
                    {
                        incorrect ? error() : ''
                    }
                    <p>Estoy de acuerdo con <a href="#">Términos y condiciones</a></p>
                    <button className='botonregistrar' type="submit">Regístrate</button>
                    <Link to="/Login">
                        <p className="yatengo">Ya tengo cuenta</p>
                    </Link>
                </form>
            </section>
        </div>
    );
}

export default Registro;