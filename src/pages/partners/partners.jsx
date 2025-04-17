import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './partners.css';

const PartnersPage = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [showPartnerForm, setShowPartnerForm] = useState(false);
  const [partners, setPartners] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');

  const navigate = useNavigate();

  const partnersData = {
    incubation: [
      {
        src: "https://static.wixstatic.com/media/1bf77c_7bee8ba9cdfd45418d3338f52de7e724~mv2.png/v1/fill/w_299,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/image.png",
        link: "https://www.aicjklu.in/"
      },
      {
        src: "https://static.wixstatic.com/media/1bf77c_d0b50892c3794c9aa7df535faf20b3ad~mv2.jpg/v1/fill/w_130,h_130,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Venture%20center.jpg",
        link: "https://www.venturecenter.co.in/"
      },
      {
        src: "https://static.wixstatic.com/media/1bf77c_6fc1d6b133ae4873aef3afeb0d98e535~mv2.png/v1/fill/w_243,h_129,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/image%20(1).png",
        link: "https://bhau.org/"
      },
      {
        src: "https://static.wixstatic.com/media/1bf77c_41bb04a2b420456bad8f13a43e50b207~mv2.png/v1/fill/w_209,h_136,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/climate%20collective.png",
        link: "https://climatecollective.net/"
      }
    ],
    grants: [
      {
        src: "https://static.wixstatic.com/media/1bf77c_0815980406f547788cb51023d573812b~mv2.jpg/v1/fill/w_178,h_138,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SISFS_JPG.jpg",
        link: "https://seedfund.startupindia.gov.in/"
      },
      {
        src: "https://static.wixstatic.com/media/1bf77c_d90c2bb29ac34139996a3da2b9a91625~mv2.jpg/v1/fill/w_273,h_111,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-HDFC-Bank-SmartUp-Grants-2021-MediaBrief_edited.jpg",
        link: "https://indiaeducationdiary.in/incubated-startup-of-aic-jklu-maini-renewables-pvt-ltd-receive-grant-of-inr-21-25-lacs-under-hdfc-parivartan-smartup-grant/"
      },
      {
        src: "https://static.wixstatic.com/media/1bf77c_3ccf90c192f14875ab5b70f0335d4d35~mv2.png/v1/fill/w_134,h_125,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Cummins.png",
        link: "https://www.cummins.com/en/in/company/india-companies/cummins-india-limited"
      },
      {
        src: "https://static.wixstatic.com/media/1bf77c_78f41977ea0647ab9d4f06711226da61~mv2.jpg/v1/fill/w_273,h_102,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/CPI%20logo.jpg",
        link: "https://www.climatepolicyinitiative.org/"
      },
      {
        src: "https://static.wixstatic.com/media/1bf77c_f4ce4dfba4e14d9988133c5a5fa959c5~mv2.png/v1/fill/w_218,h_138,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bahrat%20seats.png",
        link: "https://bharatseats.com/"
      }
    ],
    advisors: [
      {
        src: "https://static.wixstatic.com/media/1bf77c_6695dd57a2ff4ab1ba448cbe0ffde17b~mv2.png/v1/fill/w_125,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/NITI-Aayog-logo_edited.png",
        link: "https://www.niti.gov.in/"
      },
      {
        src: "https://static.wixstatic.com/media/1bf77c_72880cce63434be9bf4b9f3e80c8676e~mv2.png/v1/fill/w_119,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Indian_Institute_of_Technology_Roorkee_logo.png",
        link: "https://www.niot.res.in/"
      },
      {
        src: "https://static.wixstatic.com/media/1bf77c_b3b076574c7a4ed898681dd940bc36d2~mv2.jpg/v1/fill/w_144,h_140,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo_for_National_Institute_of_Ocean_Technology.jpg",
        link: "https://hre.iitr.ac.in/"
      },
      {
        src: "https://www.startupindia.gov.in/content/dam/invest-india/newhomepage/DPIIT-header.png",
        link: "https://www.startupindia.gov.in/"
      }
    ],
  };

  const toggleOptions = (type) => {
    setPartners(partnersData[type]);
    setActiveCategory(type);
    setShowOptions(true);
  };

  const closePopup = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setShowOptions(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setShowPartnerForm(false);
  };

  const getCategoryTitle = () => {
    switch(activeCategory) {
      case 'incubation': return 'Incubation & Acceleration Partners';
      case 'grants': return 'Granting Organizations';
      case 'advisors': return 'Advisors & Knowledge Partners';
      default: return 'Our Partners';
    }
  };

  return (
    <div className="container">
      <div className={`partners-page ${showOptions ? "blurred-background" : ""}`}>
        <div className="partners-header">
          <div className="left-section">
            <h2>Partners & Team</h2>
            <h3>Collaborative Excellence: Building Bridges, Driving Success</h3>
          </div>
          <div className="right-section">
            <p>
              Empowering partnerships and fostering teamwork to achieve unparalleled excellence.
              Our dedicated approach and shared vision create a synergy that fuels innovation and
              drives sustainable success for all.
            </p>
          </div>
        </div>

        <div className="partners-bottom-section">
          <div className="partners-grid">
            <div 
              className="partner-card" 
              onClick={() => toggleOptions('incubation')}
              style={{ borderTop: '4px solid #3C8A71' }}
            >
              Incubation & Acceleration
            </div>
            <div 
              className="partner-card" 
              onClick={() => toggleOptions('grants')}
              style={{ borderTop: '4px solid #D8FB5A' }}
            >
              Granting Organizations
            </div>
            <div 
              className="partner-card" 
              onClick={() => toggleOptions('advisors')}
              style={{ borderTop: '4px solid #245243' }}
            >
              Advisors & Knowledge
            </div>
          </div>
          <div className="partners-network">
            <h4>Join the partners network</h4>
            <button
              className="become-partner-btn"
              onClick={() => setShowPartnerForm(true)}
            >
              Become a partner →
            </button>
          </div>
        </div>
      </div>

      {/* Partners Popup */}
      <div className={`backdrop ${showOptions ? "show" : ""}`} onClick={closePopup}>
        {showOptions && (
          <div className="popup-options" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setShowOptions(false)}>
              ×
            </button>
            <h3 className="popup-title">{getCategoryTitle()}</h3>
            <div className="partners-list">
              {partners.map((partner, index) => (
                <a 
                  key={index} 
                  href={partner.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="partner-link"
                >
                  <img 
                    src={partner.src} 
                    alt={`Partner ${index}`} 
                    className="partner-image" 
                    onError={(e) => {
                      e.target.src = '/placeholder-partner.png';
                    }}
                  />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Partner Form Modal */}
      {showPartnerForm && (
        <div className="modal-backdrop" onClick={() => setShowPartnerForm(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Become a Partner</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Your name or organization" 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="your@email.com" 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">How would you like to collaborate?</label>
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder="Tell us about your interest in partnering..." 
                  required
                ></textarea>
              </div>
              <div className="form-buttons">
                <button type="submit" className="submit-btn">
                  Submit Application
                </button>
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={() => setShowPartnerForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartnersPage;