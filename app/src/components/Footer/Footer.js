import React from 'react';
import './Footer.css';
import navIcon1 from '../../assets/linkedin1.svg';
import navIcon2 from '../../assets/github1.svg';
import navIcon3 from '../../assets/instagram1.svg';

function Footer() {
  return (
    <div>
    <footer className="footer-distributed">
    
                <div class="footer-left">
    
                    <h3>Style<span>Sync</span></h3>
    
                    <p className="footer-links">
                        <a href="#" className="link-1">Home</a>
                        
                        <a href="#">Blog</a>
                    
                        <a href="#">Pricing</a>
                    
                        <a href="#">About</a>
                        
                        <a href="#">Faq</a>
                        
                        <a href="#">Contact</a>
                    </p>
    
                    <p className="footer-company-name">Style Sync © 2024</p>
                </div>
    
                <div className="footer-center">
    
                    <div>
                        <div className="fa fa-map-marker"></div>
                        <p><span>Gittikhadan</span> RCOEM , Nagpur</p>
                    </div>
    
                    <div>
                        <div className="fa fa-phone"></div>
                        <p>+91996179889</p>
                    </div>
    
                    <div>
                        <div className="fa fa-envelope"></div>
                        <p><a href="mailto:muskanjain.3120@gmail.com">muskanjain.3120@gmail.com</a></p>
                    </div>
    
                </div>
    
                <div className="footer-right">
    
                    <p className="footer-company-about">
                        <span>About Style Sync</span>
                        StyleSync provides personalized, weather-appropriate outfit recommendations, revolutionizing the fashion guidance landscape with innovative technology.                         </p>
    
                    <div className="footer-icons">
    
                    <a href="https://www.linkedin.com/in/muskan-jain-00517222b/"><img src={navIcon1} alt="" /></a>
                    <a  href="https://github.com/muskanjain31" className= 'Icon2'><img src={navIcon2} alt="" className="navIcon2"/></a>
                    <a href="https://www.instagram.com/muskanjain_3/"><img src={navIcon3} alt="" /></a>
    
                    </div>
    
                </div>
    
            </footer></div>
  )
}
export default Footer;