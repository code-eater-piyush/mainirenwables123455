import React from 'react';
import './about.css';
import aboutImage from '../../assets/about.jpg';
import missionImage from '../../assets/About(Mission).avif';
import riverImage from '../../assets/River.jpg';
import hydroDamImage from '../../assets/About(HydroDam).jpg';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate('/contact');
  };

  return (
    <section id="about">
      <div
        className="hero"
        style={{
          background: `url(${aboutImage}) no-repeat center center/cover`,
        }}
      >
        <h1>What We Do</h1>
        <h2>Clean. Safe. Renewable.</h2>
        <p>
          Maini Renewables offers scalable small hydro solutions harnessing the natural flow of water without a dam. Our innovative technology ensures cost-effective and eco-friendly energy solutions for a sustainable future.
        </p>
      </div>

      <div className="missionabout">
        <h2>Our Mission</h2>
        <p className="missionabout-tagline">
          "Empowering a sustainable future through innovative renewable energy solutions."
        </p>
        <div className="missionabout-content">
          <img src={missionImage} alt="Mission" className="missionabout-image" />
          <p className="missionabout-text">
            At Maini Renewables, our mission is to revolutionize energy production by harnessing renewable resources responsibly. We strive to create a greener future by providing efficient and sustainable energy solutions that benefit communities and preserve the planet for generations to come.
          </p>
        </div>
      </div>

      <div className="installations">
        <h2>Where Can We Install Them?</h2>
        <div className="grid">
          <div className="grid-item">
            <img src={riverImage} alt="Natural Flow" />
            <h3>Natural Flow</h3>
            <p>Rivers, Tides, and Ocean Currents</p>
          </div>
          <div className="grid-item">
            <img src={hydroDamImage} alt="Manmade Structures" />
            <h3>Manmade Structures</h3>
            <p>Irrigation canals, industrial and hydro dam tailrace channels</p>
          </div>
        </div>
        <p className="installations-text">
          Our solutions adapt seamlessly to diverse environments, ensuring compatibility and efficiency across natural and manmade water flows. Let us help you harness the power of water.
        </p>
      </div>

      <div className="cta">
        <h2>Join Us in Creating a Sustainable Future</h2>
        <button onClick={handleClick}>Contact Us</button>
      </div>
    </section>
  );
};

export default About;