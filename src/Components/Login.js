import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export const apiUrl = process.env.REACT_APP_API_URL;


const Login = ({ setIsAdmin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${apiUrl}/api/users/login`, { username, password }) 
            const { token, user } = response.data
            const isAdmin = user.isAdmin
            console.log(response.data)

            console.log('Token:', token);

            console.log('isAdmin:', isAdmin); 

            //Almacenar token y el estado isAdmin
            localStorage.setItem('token', token)
            localStorage.setItem('isAdmin', isAdmin)
            setIsAdmin(isAdmin)

            //Redirigir según el estado isAdmin
            if(isAdmin) {
                console.log('Es administrador')
                navigate('/admin-Panel')
            }else{
                console.log('No es administrador')
                navigate('/home')
            }

        } catch (error) {
            console.error('Error al iniciar sesión: ', error)
        }
    }

    return (
        <div>
            <div className='card-body p-5'>
                <form>
                    <div className='form-floating mb-3'>
                        <input 
                            type='text' 
                            className='form-control' 
                            id='floatingUsername' 
                            placeholder='Nombre de usuario'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            autoComplete='username'
                            >
                        </input>
                        <label htmlFor='floatingUsername'>Nombre de usuario</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input 
                            type='password' 
                            className='form-control' 
                            id='floatingPassword' 
                            placeholder='Contraseña'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete='password'
                        >
                        </input>
                        <label htmlFor='floatingPassword'>Contraseña</label>
                    </div>
                    <button 
                        type='button' 
                        className='btn btn-primary my-3'
                        onClick={handleLogin}
                    >
                        Iniciar Sesión
                    </button> 
                </form>
            </div>
            <div className='card-footer py-4 border-0 bg-body-secondary text-center'>
                <p className='m-0'>¿Todavía no eres miembro de Watermelon?{' '}<Link to='/register' className='link-underline link-underline-opacity-0'>Regístrate</Link></p>
            </div>
        </div>
    )
}

export default Login
