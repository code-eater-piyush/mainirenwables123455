import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IoReorderThreeOutline, IoClose } from 'react-icons/io5';
import Sidebar from '../sidebar/Sidebar';
import logo from '../../assets/logo.png'; // Import the logo
import './navbar.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const navbarHeight = navbarRef.current.offsetHeight;
    document.body.style.paddingTop = `${navbarHeight}px`;

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleMenu} />
      <div className="navbar" ref={navbarRef}>
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Maini Renewables Logo" className="navbar-logo" />
          </Link>
        </div>
        <div className="menu-list">
          <ul className="navbar-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/partners">Partners</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
          <div className="hamburger-icon" onClick={toggleMenu}>
            {isSidebarOpen ? (
              <IoClose className="cross" />
            ) : (
              <IoReorderThreeOutline />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;