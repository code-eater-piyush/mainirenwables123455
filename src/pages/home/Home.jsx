import React, { useState, useEffect } from 'react';
import './home.css';
import Mission from '../mission/Mission';
import Services from '../services/Services';

const Home = () => {
    const [isVideoActive, setIsVideoActive] = useState(false);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVideoActive((prev) => !prev);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home">
            <div className="home">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`hero-video ${isVideoActive ? 'visible' : 'hidden'}`}
                    onError={(e) => {
                        e.target.style.display = 'none';
                    }}
                    onLoadedData={() => setIsVideoLoaded(true)}
                    aria-label="Background video of renewable energy solutions"
                    role="presentation"
                >
                    <source src="/background.mp4" type="video/mp4" />
                    <img src="/fallback-image.jpg" alt="Fallback Image" />
                </video>

                <div
                    className={`hero-image ${isVideoActive ? 'hidden' : 'visible'}`}
                    style={{
                        backgroundImage: `url(Home.jpg)`,
                    }}
                    aria-label="Background image of renewable energy solutions"
                    role="img"
                ></div>

                {!isVideoLoaded && (
                    <div className="loading-spinner">
                        Loading...
                    </div>
                )}

                <div className="home-content">
                    <h1>Make Renewable Energy Predictable</h1>
                    <h2>With Small-Scaled Wind and Hydrokinetic Turbines for Reliable Power</h2>
                </div>
            </div>

            <Services />
            <Mission />
        </section>
    );
};

export default Home;