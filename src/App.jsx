import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Mission from './pages/mission/Mission';
import Contact from './pages/contact/contact';
import Solutions from './pages/Solutions/solutions';
import PartnersPage from './pages/partners/partners';
import Preloader from './components/preloader/preloader';
import './index.css';
import Wind from './pages/turbines/wind/Wind';
import Hydro from './pages/turbines/hydro/Hydro';
import PageNotFound from './pages/NoPage/PageNotFound';
import CanalInstallation from './pages/canal-installation/canal-installation';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector(".preloader").classList.add("fade-out");
      setTimeout(() => setLoading(false), 380); // Match fade-out duration
    }, 2000); // This controls how long the preloader stays visible

    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Router>
          <LocationAwareApp isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </Router>
      )}
    </>
  );
}

// This component is responsible for rendering the navbar, sidebar, and footer based on the current route
const LocationAwareApp = ({ isMenuOpen, toggleMenu }) => {
  const location = useLocation();
  const is404Page = location.pathname === "/pageNotFound" || location.pathname === "/404";

  return (
    <div className="main-content-wrapper">
      {/* Conditionally render Navbar and Sidebar based on route */}
      {!is404Page && <Navbar toggleMenu={toggleMenu} />}
      {!is404Page && <Sidebar isMenuOpen={isMenuOpen} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/hydro" element={<Hydro />} />
        <Route path="/wind" element={<Wind />} />
        <Route path="/canal-installation" element={<CanalInstallation />} />
        {/* Catch-all 404 route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/* Conditionally render Footer based on route */}
      {!is404Page && <Footer />}
    </div>
  );
};

export default App;
