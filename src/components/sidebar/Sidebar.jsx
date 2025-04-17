import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      {/* Close Button */}
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>

      {/* Sidebar Menu */}
      <ul>
        <li>
          <Link to="/" onClick={onClose}>Home</Link>
        </li>
        <li>
          <Link to="/solutions" onClick={onClose}>Solution</Link>
        </li>
        <li>
          <Link to="/Services" onClick={onClose}>Services</Link>
        </li>
        <li>
          <Link to="/mission" onClick={onClose}>Mission</Link>
        </li>
        <li>
          <Link to="/about" onClick={onClose}>About Us</Link>
        </li>
        <li>
          <Link to="/contact" onClick={onClose}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;