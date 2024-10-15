import React from 'react'
import Login from '../Components/Login'
import logoBoot from '../Assets/images/Watermelon boot logo.png'

const LoginScreen = ({ setIsAdmin }) => {
    return (
        <div className='form-div'>
            <div className='card shadow-lg form-signin'>
                <div className='title-cont'>
                    <img className='loginLogo' src={logoBoot} alt='logo_boot'/>
                    <h1 className='card-title text-center font-login'>{' '}VAMOS A PATINAR</h1>
                </div>
                <Login setIsAdmin={setIsAdmin}/>
            </div>
        </div>
    )
}

export default LoginScreen
