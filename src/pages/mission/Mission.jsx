import React from 'react';
import { FaTree, FaTint, FaRecycle, FaCogs } from 'react-icons/fa';
import './mission.css';

const Mission = () => {
  return (
    <section id="missionsec">
      <div className="mission">
        <div className="mission-container">
          <h1 className="mission-heading">
            <span className="mission-heading-design">Our Designs</span>
          </h1>
          <div className="mission-grid">
            <div className="mission-card">
              <FaCogs className="mission-icon" />
              <h2 className="mission-title">Proprietary Blade Design</h2>
              <p className="mission-description">
                Innovative, Efficient, and Eco-Friendly: Harnessing the Power of Renewable Energy with Proprietary Blade Design
              </p>
            </div>
            <div className="mission-card">
              <FaRecycle className="mission-icon" />
              <h2 className="mission-title">High Recyclability</h2>
              <p className="mission-description">
                High recyclability: turning waste into resources for a sustainable future
              </p>
            </div>
            <div className="mission-card">
              <FaTree className="mission-icon" />
              <h2 className="mission-title">Ecofriendly</h2>
              <p className="mission-description">
                Harnessing clean energy through innovative turbine design for a sustainable future
              </p>
            </div>
            <div className="mission-card">
              <FaTint className="mission-icon" />
              <h2 className="mission-title">Low Flow Compatible</h2>
              <p className="mission-description">
                Engineered for efficiency: low flow compatibility for optimal performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;