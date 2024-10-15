// AdminPanel.js
import React from 'react';
import VideoUploadForm from '../Components/VideoUploadForm';
import saveVideo from '../Services/SaveVideo';

const AdminPanel = ({ onVideoSubmit }) => {

    const handleFormSubmit = async (videoData) => {
        await saveVideo(videoData, onVideoSubmit);
    };

    return (
        <div>
            {/* Formulario para subir un nuevo video */}
            <VideoUploadForm onFormSubmit={handleFormSubmit} />
        </div>
    );
};

export default AdminPanel;