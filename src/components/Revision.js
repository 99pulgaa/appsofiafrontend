import React, { useEffect, useState } from 'react'
import ClienteService from '../services/ClienteService';
import '../css/Revision.css';


export const Revision = () => {
    //En esta constante se van actualizando los datos de los usuarios traidos del backend
    const [clientes, setClientes] = useState([]);
    const [_cliente, setCliente] = useState([]);

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

        listarClientes()
    }, []);

    function aprobarReporte(clienteId, reporteId) {
        fetch(`http://localhost:8080/api/v1/clientes/${clienteId}/reportes/${reporteId}`, {
            method: 'put',
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

    function denegarReporte(clienteId, reporteId) {
        fetch(`http://localhost:8080/api/v1/clientes/${clienteId}/reportes/${reporteId}`, {
            method: 'DELETE',
        }).then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error('No se pudo denegar el reporte');
            }
        }).then(text => {
            console.log(text);
        }).catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }

    const listarClientes = () => {
        ClienteService.getAllClientes().then(response => {
            setClientes(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
        const byteCharacters = atob(b64Data);
        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);

            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }

        const blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }

    // Función para crear un nuevo PDF con el contenido del Blob
    async function blobToPDF(nombre, data) {
        const blob = b64toBlob(data, 'application/octet-stream');
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = `${nombre}.pdf`;
        link.click();
        window.URL.revokeObjectURL(link.href);
    }

    function isAuditado(auditado, user, _reporte) {
        if (auditado) {
            return(
                <p>Ya estoy auditado</p>
            );
        } else {
            return (
                <td>
                    <button onClick={() => aprobarReporte(user.id, _reporte.id)}>Aprobar
                    </button>
                    <button onClick={() => denegarReporte(user.id, _reporte.id)}>Denegar
                    </button>
                </td>

            );
        }
    }

    return (
        <section className='fondotabla'>
            <div className='container'>
                <h2 className='text-center'>Lista de reportes</h2>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <th>Cedula</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Reporte</th>
                        <th>Rol</th>
                        <th>Auditar</th>
                    </thead>
                    <tbody>
                        {clientes.map(user =>
                            user.reportes.map(_reporte => (
                                <tr key={_reporte.id}>
                                    <td>{user.id}</td>
                                    <td>{user.nombre}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button onClick={() => blobToPDF(`${user.nombre}_${user.id}`, _reporte.reporte)}>Ver reporte</button>
                                    </td>
                                    <td>{user.rol}</td>
                                    {
                                        isAuditado(_reporte.auditado, user, _reporte)
                                    }
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>

            </div>
        </section>
    )
}

export default Revision;