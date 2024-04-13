import React, { useEffect, useState } from 'react'
import ClienteService from '../services/ClienteService';
import { Link } from 'react-router-dom';

export const ListClientesComponents = () => {

    //En esta constante se van actualizando los datos de los usuarios traidos del backend
    const[clientes, setClientes] = useState([]);

    useEffect(() => {
        listarClientes()
    },[])

    const listarClientes = () => {
        ClienteService.getAllClientes().then(response => {
            setClientes(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }


    const deleteCliente = (clienteId) => {
        ClienteService.deleteCliente(clienteId).then((response) => {
            listarClientes();
        }).catch(error => {
            console.error("Error al enviar la solicitud:", error.response);
        })
    }

  return (
    <div className='container'>
        <h2 className='text-center'>Lista de clientes</h2>
        <Link to='/add-cliente' className='btn btn-primary mb-2'>Agregar cliente</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Id</th>
                <th>Nombre</th>
                <th>Fecha de nacimiento</th>
                <th>Email</th>
                <th>Rol</th>
                <th>Contraseña</th>
                <th>Acciones</th>
            </thead>
            <tbody>
                {
                    clientes.map(

                        cliente =>
                        <tr key={ cliente.id }>
                            <td>{ cliente.id}</td>
                            <td>{ cliente.nombre }</td>
                            <td>{ cliente.fechaNacimiento }</td>
                            <td>{ cliente.email }</td>
                            <td>{ cliente.rol }</td>
                            <td>{ cliente.contrasena }</td>
                            <td>
                                <Link className='btn btn-info' to={ `/update-cliente/${cliente.id }` }>Actualizar</Link>
                                <button style={{marginLeft:"10px"}} className='btn btn-danger' onClick={() => deleteCliente(cliente.id)}>Eliminar</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>

    </div>
  )
}

export default ListClientesComponents;