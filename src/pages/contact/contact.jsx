import React, { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaQuestionCircle } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  const contentRef = useRef(null);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [propertyType, setPropertyType] = useState('hydro');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    const elements = contentRef.current.querySelectorAll(".slide-in");
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <section id="contact">
      <div className="contact">
        <div className="contact-container" ref={contentRef}>
          <div className="upper-area">
            <div className="right-side">
              <div className="tagline">
                <p>Let's Have A Chat!</p>
              </div>
              <div className="info slide-in">
                <h2>
                  <FaEnvelope /> Info Email
                </h2>
                <p>
                  Email us at:{" "}
                  <a href="mailto:info@mainirenewables.com">
                    info@mainirenewables.com
                  </a>
                </p>
                <p>
                  We’re here to assist you with any inquiries regarding our
                  services.
                </p>
              </div>
              <div className="map slide-in">
                <h2>Site Location</h2>
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092553!2d144.95373631531638!3d-37.81627997975102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f4ab%3A0x5045675218ceed30!2sMelbourne%20Victoria%20Australia!5e0!3m2!1sen!2sus!4v1632447455770!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <div className="form-container slide-in">
              <h2>Contact Form</h2>
              <form>
                <label>Name:</label>
                <input type="text" name="name" required />

                <label>Contact:</label>
                <input type="tel" name="contact" required />

                <label>Location:</label>
                <input type="text" name="location" required />

                <label>Site Location:</label>
                <input
                  type="text"
                  name="siteLocation"
                  placeholder="Google Map Pin"
                  required
                />

                {/* Additional Dropdowns */}
                <label>Type of Property</label>
                <select name="property-name" required onChange={(e) => setPropertyType(e.target.value)}>
                  <option value="hydro">Hydro</option>
                  <option value="wind" >Wind</option>
                </select>

                {propertyType === "hydro" && (
                  <div className="property-selected">
                    <label>Type of Property - Hydro:</label>
                    <select name="hydro-type" required>
                      <option value="canal">Canal</option>
                      <option value="river">River</option>
                      <option value="existing-power-plant">
                        Existing Power Plant
                      </option>
                      <option value="tidal">Tidal</option>
                    </select>
                  </div>
                )}

                {propertyType === "wind" && (
                  <div className="property-selected">
                    <label>Type of Property - Wind:</label>
                    <select name="wind-type" required>
                      <option value="rooftop">Rooftop</option>
                      <option value="existing">Existing</option>
                      <option value="wind-farm">Wind Farm</option>
                      <option value="highway">Highway</option>
                      <option value="open-farm">Open Farm</option>
                    </select>
                  </div>
                )}


                {/* Individual or Company */}
                <label>Are you an individual or company?</label>
                <select name="individual-or-company" required>
                  <option value="individual">Individual</option>
                  <option value="company">Company</option>
                </select>

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>

          <div className="faqs slide-in">
            <h2>
              <FaQuestionCircle /> Queries / FAQs
            </h2>
            <div className="faq">
              {[
                {
                  question: "What services do you offer?",
                  answer:
                    "We provide innovative renewable energy solutions tailored to your needs.",
                },
                {
                  question: "How can I get a quote?",
                  answer:
                    "Simply fill out the contact form, and we will get back to you with a personalized quote.",
                },
                {
                  question: "Where are you located?",
                  answer:
                    "Our office is situated in the heart of the city, easily accessible for consultations.",
                },
                {
                  question: "How can I track my project progress?",
                  answer:
                    "We provide regular updates through email and our project management system.",
                },
              ].map((item, index) => (
                <div key={index}>
                  <div
                    className={`faq-question ${activeQuestion === index ? "active" : ""
                      }`}
                    onClick={() => toggleQuestion(index)}
                  >
                    {item.question}
                  </div>
                  <div
                    className={`faq-answer ${activeQuestion === index ? "show" : ""
                      }`}
                  >
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
