import React, { useEffect, useState } from 'react';
import '../css/Inicio.css';
import txtlogo2 from '../img/txtlogo2.png';
import { Link } from 'react-router-dom';


export const Inicio = () => {
    const [_cliente, setCliente] = useState([]);

    useEffect(() => {
        if (!navigator.onLine) {
            if (localStorage.getItem("user-complete") !== null) {
                setCliente(Array.from(localStorage.getItem("user-complete")));
            }
        } else {
            if (localStorage.getItem("user") !== null) {
                const URL =
                    `http://localhost:8080/api/v1/clientes/${localStorage.getItem('user')}`;
                fetch(URL)
                    .then((data) => data.json())
                    .then((data) => {
                        setCliente(data);
                        localStorage.setItem("user-complete", JSON.stringify(data));
                    })
            }
        }
    }, []);

    function isLogged(){
        if(_cliente.length === 0){
            return(
                <Link to="/Login">
                <button className='botonreportar' type="submit">Reportar</button>
            </Link>
            );
        }else{
            return(
                <Link to="/Menu">
                <button className='botonreportar' type="submit">Reportar</button>
            </Link>
            );
        }
    }

    return (
        <div>
            <div className='formularioinicio'>
                <div align="center"><img src={txtlogo2} width="480" height="320" /> </div>
                <p className="report">¡Haz tu reporte aquí!</p>
                {
                    isLogged()
                }
            </div>
        </div>
    );
}

export default Inicio;