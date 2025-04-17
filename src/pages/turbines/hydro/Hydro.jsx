import React from 'react';
import './Hydro.css';

const Hydro = () => {
  return (
    <section id="home">
      <div className="home">
        {/* Background Image */}
        <div
          className="hero-image visible"
          style={{
            backgroundImage: `url(./water-walpaper.jpg)`,
          }}
        ></div>

        {/* Main Content */}
        <div className="home-content">
          <h1>Join the Renewable Revolution</h1>
          <h2>
            With our advanced hydro turbine technology, we don’t just offer energy solutions; we create opportunities for communities to thrive while preserving the planet.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hydro;