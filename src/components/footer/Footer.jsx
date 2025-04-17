import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Us Section */}
        <div className="footer-section about-us">
          <h2>About Us</h2>
          <p>We are committed to providing excellent service and innovative solutions. Learn more about our mission and values.</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/solutions">Solutions</a></li>
            <li><a href="/partners">Partners</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-section contact-us">
          <h2>Contact Us</h2>
          <ul>
            <li><a href="mailto:info@brainsmedia.com">info@MainiRenewables.com</a></li>
            <li><a href="#location">Mumbai & Pune</a></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section follow-us">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://x.com/Maini90750821" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.linkedin.com/company/maini-renewables/?viewAsMember=true" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; ©2024 by Maini Renewables Pvt. Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;

