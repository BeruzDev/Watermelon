import React from 'react';
import { FaLocationDot } from "react-icons/fa6";

const VideoCard = ({ videoUrl, description, spot }) => {
    return (
        <div className="video-card shadow bg-white">
            <iframe
                className='video'
                src={videoUrl}
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <div className='description'>
                <p>{description}</p>
                <div className='spot' onClick={() => window.open(spot)}>
                    <FaLocationDot />
                </div>
            {/* <a href={spot}></a> */}
            </div>
        </div>
    );
};

export default VideoCard;
