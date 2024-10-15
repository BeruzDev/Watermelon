import React, { useState } from 'react';
import logoBoot from '../Assets/images/Watermelon boot logo.png'


const VideoUploadForm = ({ onFormSubmit }) => {
    const [videoUrl, setVideoUrl] = useState('');
    const [description, setDescription] = useState('');
    const [spot, setSpot] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newVideo = { videoUrl, description, spot };

        console.log("Submitting video: ", newVideo)

        // Envía el video al componente adminPanel.js -> App.js para actualizar el estado
        onFormSubmit(newVideo);

        //Mostrar la alerta de éxito
        setShowAlert(true)

        // Limpia el formulario
        setVideoUrl('');
        setDescription('');
        setSpot('');

        //Ocultar la alerta después de unos segundos
        setTimeout(() => {
            setShowAlert(false)
        }, 4000);
    };

    return (
        <div className='form-div'>
            <div className='card shadow-lg form-signin'>
                <div className='card-body p-5'>
                    {showAlert && (
                        <div className='alert alert-success' role='alert'>
                        ¡Video publicado con éxito!
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className='title-cont mb-3'>
                            <img className='loginLogo' src={logoBoot} alt='logo_boot'/>
                            <h1 className='card-title text-center font-upload'>{' '}PUBLICA UN VIDEO</h1>
                        </div>
                        <div className='card-body'>
                            <div className='form-floating mb3'>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='floatingVideo'
                                    placeholder='Añade un nuevo video'
                                    value={videoUrl}
                                    onChange={(e) => setVideoUrl(e.target.value)}
                                    autoComplete=''
                                />
                                <label htmlFor='floatingVideo'>Añade la URL de un video</label>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className='form-floating'>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='floatingDescription'
                                    placeholder='Añade una descripción del video'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    autoComplete=''
                                />
                                <label htmlFor='floatingDescription'>Añade la descripción del video</label>
                            </div>
                        </div>
                        <div className='card-body mb-3'>
                            <div className='form-floating'>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='floatingSpot'
                                    placeholder='Añade un nuevo spot'
                                    value={spot}
                                    onChange={(e) => setSpot(e.target.value)}
                                    autoComplete=''
                                />
                                <label htmlFor='floatingSpot'>Añade la URL de un spot</label>
                            </div>
                        </div>
                        <button
                            type='submit'
                            className='btn btn-outline-secondary mx-3'>
                            Publicar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default VideoUploadForm;
