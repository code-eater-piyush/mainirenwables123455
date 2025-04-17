import React from 'react';
import canalImg from '../../assets/River.jpg'; // Make sure to have this image in your project
import './canal-installation.css';

const CanalInstallation = () => {
  return (
    <section className="canal-section">
      <div className="canal-container">
        <h1 className="canal-title">Efficient Canal Turbine Installation</h1>
        
        <div className="canal-content">
          <img 
            src={canalImg} 
            alt="Hydro turbine installed in canal" 
            className="canal-image"
            loading="lazy"
          />
          
          <div className="canal-text">
            <p>
              Our hydro turbines are designed for seamless installation in existing canal systems, 
              requiring minimal infrastructure changes. The compact design allows for deployment 
              in waterways without disrupting water flow or local ecosystems. With simple anchoring 
              systems and modular components, installation can be completed in days rather than weeks, 
              providing immediate clean energy generation with virtually no environmental impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CanalInstallation;