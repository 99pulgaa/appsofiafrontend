import React, { useState, useEffect } from 'react';
import '../css/Reporte.css';
import { Link, useNavigate } from 'react-router-dom';

export const Reporte = () => {
    const [_cliente, setCliente] = useState([]);
    const [reporte, setReporte] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!navigator.onLine) {
            if (localStorage.getItem("user-complete") !== null) {
                setCliente(Array.from(localStorage.getItem("user-complete")));
            }
        } else {
            const URL =
                `http://localhost:8080/api/v1/clientes/${localStorage.getItem('user')}`;
            fetch(URL)
                .then((data) => data.json())
                .then((data) => {
                    setCliente(data);
                    localStorage.setItem("user-complete", JSON.stringify(data));
                })
        }
    }, []);

    const handleReporte = (e) => {
        setReporte(e);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        uploadFile();
    }

    function uploadFile() {
        const _body = new FormData();
        _body.set('reporte', reporte[0]);
        
        fetch(`http://localhost:8080/api/v1/clientes/${_cliente.id}/anadirReporte`, {
            method: 'POST',
            body: _body,
        }).then(response => {
            if (response.ok) {
                navigate('/Menu');
                return response.text();
            } else {
                throw new Error('Failed to upload file');
            }
        }).then(text => {
            console.log(text);
        }).catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }

    function isUploaded() {
        if (reporte.length !== 0) {
            return (
                <div class="file-drop-area">
                    <span class="file-msg">{reporte[0].name}</span>
                    <input class="file-input" type="file" onChange={e => handleReporte(e.target.files)}></input>
                </div>
            );
        }
        else {
            return (
                <div class="file-drop-area">
                    <span class="fake-btn">Choose files</span>
                    <span class="file-msg">or drag and drop files here</span>
                    <input class="file-input" type="file" onChange={e => handleReporte(e.target.files)}></input>
                </div>
            );
        }
    }

    return (
        <div>
            <section className='formularioreporte'>
                <div className='container filedrop'>
                    <form onSubmit={handleSubmit}>
                        {
                            isUploaded()
                        }
                        <div>
                            <br></br>
                            <p>Recuerda subir el archivo en formato (pdf, png, jpg).</p>
                            <br></br>
                            <br></br>
                            <button className="bton" type="submit" > Entregar tu evidencia</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}
export default Reporte;