import React, { useState, useEffect } from 'react';
import '../css/LoginComponent.css';
import txtlogo from '../img/txtlogo.png';
import { Link, useNavigate } from 'react-router-dom';

export const LoginComponent = () => {
    const [_email, setEmail] = useState('');
    const [_contrasena, setContrasena] = useState('');
    const [cliente, setCliente] = useState();
    const [incorrect, setIncorrect] = useState(false);
    const navigate = useNavigate();

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

    useEffect(() => {
        const URL =
            'http://localhost:8080/api/v1/clientes';
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                const user = data.filter(e => {
                    if (e.email == _email && e.contrasena == _contrasena) {
                        return e;
                    }
                });
                setCliente(user);
            });
    }, [cliente]);

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();


        //LocalStorage, esto verifica si hay un usuario logeado
        if (cliente.length !== 0) {
            const perfil = cliente[0].id;
            localStorage.setItem('user', perfil);
            localStorage.setItem('user-complete', cliente[0]);
            navigate("/MenuComponent")
            window.location.reload();
        } else {
            setIncorrect(!incorrect);
        }
    };

    function error() {
        return (
            <label>El correo o contraseña son incorrectos</label>
        );
    }

    return (
        <div>
            <section className='formulario'>
                <div align="center"><img className="logo" src={txtlogo} /> </div>
                <div className="parametros">
                    <form onSubmit={handleSubmit} >
                        <div className="username">
                            <input type="email" className={incorrect ? 'email error' : 'email'} id="email" name="email" onChange={e => handleEmailChange(e.target.value)} required pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}" />
                            <label>Email</label>
                        </div>
                        <div className="username">
                            <input type="password" className={incorrect ? 'pass error' : 'pass'} id="contraseña" name="contraseña" onChange={e => handleContrasenaChange(e.target.value)} required minLength="6" />
                            <label>contraseña</label>
                        </div>
                        {
                            incorrect ? error() : ''
                        }
                        <div className="recordar"><a href="../html/forgetpass.html">¿Olvidó su contraseña?</a></div>
                        <button className="botoniniciar" type="submit">Iniciar</button>
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