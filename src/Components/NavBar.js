import React from 'react'
import { Link } from 'react-router-dom'
import logoBoot from '../Assets/images/Watermelon boot logo.png'


const NavBar = ({ isAdmin }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary border border-bottom border-dark-subtle">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img className='loginLogo' src={ logoBoot } alt='logoBoot'/>
                </Link>
                <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {isAdmin && ( 
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/admin-panel">Publicar</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/users-panel">Administrar</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/home">Inicio</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar
