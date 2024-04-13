import React, { useState } from 'react';
import '../css/RegistroComponent.css';
import { validarRegistro, validarEmail } from '../components/validar.js';
import { Link } from 'react-router-dom';

export const RegistroComponent = () => {
    const [cedula, setCedula] = useState('');
    const [nombre, setNombre] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [rol, setRol] = useState('');

    const handleRolChange = (event) => {
        setRol(event.target.value);
    };

    return (
        <div>
            <section className='bloque'>
                <h4>REGISTRO</h4>
                <input className="controls" type="text" name="documento" id="documento" placeholder="Documento" required />
                <input className="controls" type="text" name="nombre" id="nombre" placeholder="Nombre completo" required />
                <input className="controls" type="date" name="fecha" id="fecha" placeholder="Fecha" required />
                <input className="controls" type="email" name="email" id="email" placeholder="Email" required />
                <input className="controls" type="password" name="pass" id="pass" placeholder="Contraseña" required />

                <select id="rol" className="controls" value={rol} onChange={handleRolChange} required>
                    <option value="">Selecciona un rol</option>
                    <option value="admin">Administrador</option>
                    <option value="colaborador">Colaborador</option>
                </select>
                <p>Estoy de acuerdo con <a href="#">Términos y condiciones</a></p>
                <button className='botonregistrar' type="submit" onClick={validarRegistro}>Regístrate</button>
                <Link to="/LoginComponent">
                    <p className="yatengo">Ya tengo cuenta</p>
                </Link>
            </section>
        </div>
    );
}

export default RegistroComponent;