import React, { useState, useEffect } from 'react';
import axios from 'axios'
import VideoCard from '../Components/VideoCard';

const Home = ({ onVideoSubmit }) => {
    const [videos, setVideos] = useState([]);    

    useEffect(() => {
        const fetchVideos = async () =>{
            try {
                const response = await axios.get('/api/videoRoutes')
                //Guarda los videos en el estado
                setVideos(response.data)
                console.log("Videos in Home:", response.data); 
            } catch (error) {
                console.error('Error al obtener los videos: ', error)
            }
        }
        fetchVideos()
    }, [])

    return (
        <div className='my-5 px-3 card-cont'>
            {videos.length > 0 ? (
                videos.map((video) => (
                    <VideoCard
                        key={video._id}
                        videoUrl={video.videoUrl}
                        description={video.description}
                        spot={video.spot}
                    />
                ))
            ) : (
                <p>No hay videos disponibles.</p>
            )}
        </div>
    );
};

export default Home;
