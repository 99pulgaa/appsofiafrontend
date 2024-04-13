import React from 'react';
import '../css/LoginComponent.css';
import txtlogo from '../img/txtlogo.png'; 
import { Link } from 'react-router-dom';
import { validarYRedireccionar, validarRegistro, validarEmail } from '../components/validar.js';


export const LoginComponent = () => {
    return (
        <div>
            <section className='formulario'>
                <div align="center"><img src={txtlogo} width="290" height="270" /> </div>
                <div className="parametros"> 
                    <form method="post" onSubmit={validarYRedireccionar}>
                        <div className="username"> 
                            <input type="email" id="email" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                            <label>Email</label>
                        </div>
                        <div className="username">
                            <input type="password" id="contraseña" name="contraseña" required minLength="6" /> 
                            <label>contraseña</label>
                        </div>
                        <div className="recordar"><a href="../html/forgetpass.html">¿Olvidó su contraseña?</a></div>
                        <button className="botoniniciar" type="submit" onClick={validarYRedireccionar}>Iniciar</button>
                        <div className="registrarse">
                            Quiero hacer el <Link to="/RegistroComponent">registro</Link>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default LoginComponent;