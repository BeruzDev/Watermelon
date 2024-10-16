import React, { useState, useEffect } from 'react'
import axios from 'axios'
export const apiUrl = process.env.REACT_APP_API_URL;


const UserAdministration = () => {
    const [videos, setVideos] = useState([]);
    const [usuarios, setUsuarios] = useState([]);

    //Recuperar videos para la tabla
    useEffect(() => {
        const fetchVideos = async ()  => {
            try {
                const response = await axios.get(`${apiUrl}/api/videoRoutes/`)
                //Guardar los videos en el estado
                setVideos(response.data)
                console.log('Videos obtenidos: ', response.data)
            } catch (error) {
                console.error('Error al obtener los videos: ', error)
            }
        }
        fetchVideos()
    }, []);

    //Recuperar usuarios para la tabla
    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/users/getUsers/`)
                //Ocultar el usuario Administrador para no borrarlo por error
                //username: RollerBoy
                //isAdmin: true
                const usuarioFiltrado = response.data.filter(usuario => !usuario.isAdmin)// <-si el usuario tiene isAdmin en false lo muestras
                setUsuarios(usuarioFiltrado)
                console.log('Usuarios obtenidos: ', response.data)
            } catch (error) {
                console.error('Error al obtener usuarios: ', error)
            }
        }
        fetchUsuarios()
    }, []);

    //Borrar video
    const deleteVideo = async (id) => {
        try {
            await axios.delete(`${apiUrl}/api/videoRoutes/${id}`)
            //Actualizar la lista de videos
            setVideos(videos.filter(video => video._id !== id))
            console.log('Video eliminado.')
        } catch (error) {
            console.error('Error al eliminar el video: ', error)
        }
    }
        
    //Borrar Usuario
    const deleteUsuario = async (id) => {
        console.log('ID del usuario a eliminar: ', id)
        try {
            await axios.delete(`${apiUrl}/api/users/${id}`)
            //Actualizar la lista de usuarios
            setUsuarios(usuarios.filter(usuario => usuario._id !== id))
            console.log('Usuario eliminado.')
        } catch (error) {
            console.error('Error al eliminar el usuario: ', error)
        }
    }

    return (
        <div className='tables-cont'>
            <div className='adminTable card shadow-lg'>
                <table className='table table-hover mb-0'>
                    <thead>
                        <th className='p-3 bg-body-secondary font' scope='col'>Videos</th>
                    </thead>
                    <tbody>
                        {videos.length > 0 ? (
                                videos.map((video) => {
                                    return (
                                        <tr key={video._id} className='tableRow'>
                                            <td className='talbeDate'>{video.description}</td>
                                            <td>
                                                <button className='btn  btn-danger' onClick={() => deleteVideo(video._id)}>Eliminar</button>
                                            </td>
                                        </tr>
                                    )
                                })
                        ) : (
                            <p>No hay videos disponibles</p>
                        )}
                    </tbody>
                </table>
            </div>
            
            <div className='adminTable card shadow-lg'>
                <table className='table table-hover mb-0'>
                    <thead>
                            <th className='p-3 bg-body-secondary font' scope='col'>Usuarios</th>
                    </thead>
                    <tbody>
                    {usuarios.length > 0 ? (
                        usuarios.map((usuario) => {
                                return (
                                    <tr key={usuario._id} className='tableRow'>
                                        <td className='talbeDate'>{usuario.username}</td>
                                        <td>
                                            <button className='btn btn-danger' onClick={() => deleteUsuario(usuario._id)}>Eliminar</button>
                                        </td>
                                    </tr>
                                )
                            })
                        ) : (
                            <tr>
                                <td>No hay usuarios disponibles</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserAdministration
