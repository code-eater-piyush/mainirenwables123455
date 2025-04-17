import React from 'react';
import './solutions.css';
import Mission from '../mission/Mission';
import { Link } from 'react-router-dom';


const Solutions = () => {
    return (
        <div className="solutions-section">
            <h1 className="section-title">
                <span className="section-title-design">Our Solutions</span>
            </h1>
            <p className="section-description">Innovative and sustainable energy solutions tailored to your needs.</p>

            <div className="solution-card">
    <img src="canal.avif" alt="Canal Installation" className="solution-image" />
    <div className="solution-info">
        <h2>Canal Installation</h2>
        <p>Generate damless power by harnessing the kinetic energy of water.</p>
        <Link to="/canal-installation" className="learn-more">Learn More &rarr;</Link>
    </div>
</div>
            
            <div className="solution-card reverse">
                <img src="rooftop.jpg" alt="Rooftop Installation" className="solution-image" />
                <div className="solution-info">
                    <h2>Rooftop Installation</h2>
                    <p>Our turbines on your rooftop for localized power generation.</p>
                    <a href="/rooftop-installation" className="learn-more">Learn More &rarr;</a>
                </div>
            </div>

            {/* Windfarm Installation */}
            <div className="solution-card">
                <img src="windfarm.avif" alt="Windfarm Installation" className="solution-image" />
                <div className="solution-info">
                    <h2>Windfarm Installation</h2>
                    <p>Large-scale installation for high-output power generation.</p>
                    <a href="/windfarm-installation" className="learn-more">Learn More &rarr;</a>
                </div>
            </div>

            {/* More Solutions Button */}
            <div className="more-solutions">
                <button onClick={() => window.location.href = '/more-solutions'}>
                    Explore More Solutions &gt;
                </button>
            </div>

            <Mission />
        </div>
    );
};

export default Solutions;