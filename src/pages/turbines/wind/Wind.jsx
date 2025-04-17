import React from 'react';
import './Wind.css';
import wind11 from '../../../assets/wind11.png';
import wind22 from '../../../assets/wind22.png';
import wind33 from '../../../assets/wind33.png';


const WindTurbine = () => {
  return (
    <div className="wind-turbine-page">
      {/* Hero Section */}
      <section className="turbine-hero">
        <div className="hero-content">
          <h1>Advanced Wind Turbine Solutions</h1>
          <p className="subtitle">Harnessing wind energy with cutting-edge technology</p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="turbine-section">
        <div className="section-content">
          <div className="text-content">
            <h2>Efficient Energy Conversion</h2>
            <p>Our turbines convert up to 45% of wind energy into usable electricity, significantly higher than industry averages. The aerodynamic blade design minimizes turbulence and maximizes energy capture.</p>
            <ul className="feature-list">
              <li>Optimized for low wind speeds</li>
              <li>Minimal maintenance requirements</li>
              <li>Quiet operation technology</li>
            </ul>
          </div>
          <div className="image-container">
            <img 
              src={wind11} 
              alt="Wind turbine aerodynamic design"
              className="section-image"
            />
          </div>
        </div>
      </section>

      <section className="turbine-section alt-bg">
        <div className="section-content reverse">
          <div className="text-content">
            <h2>Durable Construction</h2>
            <p>Built to withstand extreme weather conditions with aerospace-grade materials. Our turbines feature corrosion-resistant coatings and lightning protection systems for longevity.</p>
            <div className="specs-grid">
              <div className="spec-item">
                <h3>25+ Years</h3>
                <p>Design lifespan</p>
              </div>
              <div className="spec-item">
                <h3>98%</h3>
                <p>Uptime reliability</p>
              </div>
            </div>
          </div>
          <div className="image-container">
            <img 
              src={wind22}
              alt="Wind turbine construction"
              className="section-image"
            />
          </div>
        </div>
      </section>

      <section className="turbine-section">
        <div className="section-content">
          <div className="text-content">
            <h2>Smart Grid Integration</h2>
            <p>Our proprietary control systems seamlessly integrate with existing power infrastructure, providing stable energy output and real-time performance monitoring.</p>
            <button className="cta-button">
              Request Technical Specifications
            </button>
          </div>
          <div className="image-container">
            <img 
              src={wind33}
              alt="Wind turbine control systems"
              className="section-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WindTurbine;