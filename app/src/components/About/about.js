import React from 'react';
import './about.css';
import img1 from "../../assets/focused-female-customer-shop-assistant-browsing-dresses-rack-together-choosing-clothes-fashion-store-full-length-shopping-retail-concept.jpg" ;
import img2 from "../../assets/business-strategy-success-target-goals.jpg";
import img3 from "../../assets/young-people-working-together-startup-company.jpg";

function About() {
  return (
    <div className="about-page">
        <div className="gradient-circle top-left"></div> {/* Top Left Circle */}
        <div className="gradient-circle bottom-right"></div> {/* Bottom Right Circle */}
      <div className="hero-section">
        <h1>About Us</h1>
        <p>We are committed to delivering the best service.</p>
      </div>
    
      
      <div className="content-section">
        <div className="content">
          <img src= {img1} />
          <div className="text">
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide high-quality products that combine performance with value pricing, while establishing a successful relationship with our customers and our suppliers.
            </p>
          </div>
        </div>
        <div className="content">
          <img src= {img2} />
          <div className="text">
            <h2>Our Vision</h2>
            <p>
              Our vision is to be a leading company in the industry, providing innovative solutions and unparalleled service to our customers worldwide.
            </p>
          </div>
        </div>
        <div className="content">
          <img src= {img3} />
          <div className="text">
            <h2>Our Team</h2>
            <p>
              Our team is made up of dedicated professionals who are passionate about their work and committed to achieving the highest levels of customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
