import React from 'react'
import Register from '../Components/Register'
import logoBoot from '../Assets/images/Watermelon boot logo.png'

const RegisterScreen = () => {
    return (
        <div className='form-div'>
            <div className='card shadow-lg form-signin'>
                <div className='title-cont'>
                    <img className='loginLogo' src={logoBoot} alt='logo_boot'/>
                    <h1 className='card-title text-center font-register'>{' '}UNETE A NUESTRA CREW</h1>
                </div>
                <Register/>
            </div>
        </div>
    )
}

export default RegisterScreen
