import React from 'react';

function VideoSection() {
    const videoUrl = "https://videos.pexels.com/video-files/8471218/8471218-uhd_2732_1440_25fps.mp4"; // URL do vídeo
    return (
        <div className="video-section mt-3">
            <div className="container flex">
                
                <div className="circle-container-video">
                    <video className="circle-video" autoPlay muted loop>
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="highlight-info-center">
                    <h1>Immerse yourself in the virtual reality</h1>
                    <p>Check out our latest products for virtual immersion, perfect for gamers and VR enthusiasts. Dive into the future of gaming and experience next-level adventures.</p>
                    <button className="primary-btn mt-3">Know more</button>
                </div>
                
            </div>
        </div>
    );
}

export default VideoSection;