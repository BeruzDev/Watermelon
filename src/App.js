import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import AdminPanel from './Screens/AdminPanel'
import Home from './Screens/Home'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'
import UserAdministration from './Screens/UserAdministration'
import NavBar from './Components/NavBar'

function App() {
  //Estado para verificar si el usuario esta logueado como administrador
  const [isAdmin, setIsAdmin] = useState(false);
  //Estado para los videos que se publican
  const [videos, setVideos] = useState([]);

  //Añade al estado un video cada vez que se publica un nuevo video des de el panel del administrador
  const handleVideoSubmit = (newVideo) => {
    setVideos((prevVideos) => [...prevVideos, newVideo]); // <- Copia el array videos ya existentes y con setVideos añade un newVideo
    console.log("Nuevo video enviado: ", newVideo)
  }

  //Obtenemos la ruta actual
  const location = useLocation()

  //Condición para ocultar el navBar en la pantalla de login y registro
  const hideNavBar = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/'

  return (
    <div>
      {/* Si la ruta no es ni login ni register y  el usuario es admin se muestra el navegador */}
      {!hideNavBar && <NavBar isAdmin={isAdmin} />}

      <Routes>
        {/* Ruta principal: redirige al login por defecto */}
        <Route path='/' element={<LoginScreen setIsAdmin={setIsAdmin} />} />
        {/* Ruta de login */}
        <Route path='/login' element={<LoginScreen setIsAdmin={setIsAdmin} />} />
        {/* Ruta de registro */}
        <Route path='/register' element={<RegisterScreen />} />
        {/* Ruta de home donde se muestran los videos publicados */}
        <Route path='/home' element={<Home />} />
        {/* Rutas de administración, solo accesibles si el usuario es administrador */}
        {isAdmin && <Route path='/admin-panel' element={<AdminPanel onVideoSubmit={handleVideoSubmit} />} />}
        <Route path='/users-panel' element={<UserAdministration />} />
      </Routes>
    </div>
  );
}

export default App;
