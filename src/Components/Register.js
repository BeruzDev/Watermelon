import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export const apiUrl = process.env.REACT_APP_API_URL;



const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate()

    //Función que se ejecuta al enviar el formulario
    const handleSubmit = async (e) =>{
        e.preventDefault()

        try {
            //Enviar los datos al backend usando
            const response = await axios.post(`${apiUrl}/api/users/register/`, {
                username, 
                email, 
                password
            })

            if(response.data.message === 'Usuario registrado con éxito.'){ // O el mensaje que devuelve tu backend
                setMessage('Registro exitoso. Redirigiendo a la página de inicio...'); // Mensaje de éxito
                navigate('/home'); // Redirige al home
            } else {
                setMessage(response.data.message || 'Error desconocido'); // Manejar otros mensajes
            }

            console.log('Usuario registrado: ', response.data)
        } catch (error) {
            console.error('Error al registrar al usuario:', error)
        }
    }

    return (
        <div>
            <div className='card-body p-5'>
                <form>
                    <div className='form-floating mb-3 '>
                        <input 
                            type='text' 
                            className='form-control' 
                            id='floatinUsername' 
                            placeholder='Nombre de usuario' 
                            autoComplete='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        ></input>
                        <label htmlFor='floatinUsername'>Nombre de usuario</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input 
                            type='email' 
                            className='form-control' 
                            id='floatingEmail' 
                            placeholder='Email' 
                            autoComplete='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                        <label htmlFor='floatingEmail'>Email</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input 
                            type='password' 
                            className='form-control' 
                            id='floatingPassword' 
                            placeholder='Contraseña' 
                            autoComplete='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                        <label htmlFor='floatingPassword'>Contraseña</label>
                    </div>
                    <button 
                        type='submit' 
                        className='btn btn-primary my-3'
                        onClick={handleSubmit}
                    >
                    Regístrate</button> 
                </form>
            </div>
                <div className='card-footer py-4 border-0 bg-body-secondary text-center'>
                    <p className='m-0'>Ya estas registrado?{' '}<Link to='/login' className='link-underline link-underline-opacity-0'>Inicia Sesión</Link></p>
                </div>
        </div>
    )
}

export default Register
