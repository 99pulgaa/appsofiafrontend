import React, { useEffect, useState } from 'react'
import ClienteService from '../services/ClienteService';
import  {Link, useNavigate, useParams} from 'react-router-dom';

export const AddClienteComponent = () => {
    const [cc, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [email, setEmail] = useState('');
    const [rol, setRol] = useState('');
    const [contrasena, setContrasena] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateCliente = (e) => {
        e.preventDefault();
        const cliente = {id, nombre, fechaNacimiento, email, rol, contrasena};
        if(id){
            ClienteService.updateCliente(id,cliente).then((response) =>  {
                console.log(response.data);
                navigate('/clientes');
            }).catch(error => {
                console.error("Error al enviar la solicitud:", error.response);
            })
        }
        else{
            cliente.id = cc;
            ClienteService.createCliente(cliente).then((response) =>  {
                console.log(response.data);
                navigate('/clientes');
            }).catch(error => {
                console.error("Error al enviar la solicitud:", error.response);
            })
        }
    }

    //efecto secundario para establecer nuevos valores 
    useEffect(() => {
        ClienteService.getClienteByid(id).then((response) => {
            setId(response.data.id)
            setNombre(response.data.nombre);
            setFechaNacimiento(response.data.fechaNacimiento);
            setEmail(response.data.email);
            setRol(response.data.rol);
            setContrasena(response.data.contrasena);
        }).catch(error => {
            console.log(error);
        })
    },[])

    //Esto se encarga de cambiar el titulo de la pagina en la que estamos, si el id es 0 o sea nulo, va a decir "agregar cliente"
    const title = () => {
      if(id){
          return <h2 className='text-center'>Actualizar cliente</h2>;
      }
      else{
          return <h2 className='text-center'>Agregar cliente</h2>;
      }
    }

//Formulario
return (
    <div>
        <div className='container'>
            <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
               <h2 className='text-center'>
                {
                    title()
                }
               </h2> 
               <div className='card-body'>
               <form>
                    <div className='form-group mb-2'>
                        <label className='form-label'>ID</label>
                        <input
                            type='text'
                            placeholder='Digite su nombre'
                            name='cc'
                            className='form-control'
                            value={ cc }
                            onChange={ (e) => setId (e.target.value)}
                        />
                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-label'>Nombre</label>
                        <input
                            type='text'
                            placeholder='Digite su nombre'
                            name='nombre'
                            className='form-control'
                            value={ nombre }
                            onChange={ (e) => setNombre (e.target.value)}
                        />
                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-label'>Fecha de Nacimiento</label>
                        <input
                            type='date'
                            placeholder='Digite su Fecha de Nacimiento'
                            name='fechanacimiento'
                            className='form-control'
                            value={ fechaNacimiento }
                            onChange={ (e) => setFechaNacimiento (e.target.value)}
                        />
                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-label'>Email</label>
                        <input
                            type='email'
                            placeholder='Digite su Email'
                            name='email'
                            className='form-control'
                            value={ email }
                            onChange={ (e) => setEmail (e.target.value)}
                        />
                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-label'>Rol</label>
                        <input
                            type='text'
                            placeholder='Digite su Rol'
                            name='Rol'
                            className='form-control'
                            value={ rol }
                            onChange={ (e) => setRol (e.target.value)}
                        />
                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-label'>contraseña</label>
                        <input
                            type='password'
                            placeholder='Digite su contraseña'
                            name='contrasena'  
                            className='form-control'
                            value={ contrasena }
                            onChange={ (e) => setContrasena (e.target.value)}
                        />
                    </div>
                    <button className='btn btn-success' onClick={ (e) => saveOrUpdateCliente (e)}>Guardar</button>
                    &nbsp;&nbsp;
                    <Link to='/clientes' className='btn btn-danger'>Cancelar</Link>
                </form>
                </div>     
            </div>
            </div>
        </div>
    </div>
  )
}

export default AddClienteComponent;