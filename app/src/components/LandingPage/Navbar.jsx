import React from 'react';
import './Navbar.css';
import frontImage from '../../assets/frontimage.jpg';
import logoImg from '../../assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="navMain" style={{ display: 'flex', alignItems: 'center', width: '100%', height: '80px', justifyContent: 'space-between' }}>
  <div className="logo1" style={{ flex: '1' }}>
    <img className='logoImg' src={logoImg} alt="Logo" />
  </div>
  <div className="logo" style={{ flex: '1', textAlign: 'center' }}>
    STYLE SYNC
  </div>
  <div className="icon" style={{ flex: '1', textAlign: 'right' }}>
    <FontAwesomeIcon icon={faUserCircle} />
  </div>
</div>

        <ul className="nav-links">
          <li><a href="#">Category</a></li>
          <li><a href="#">How it works</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
       
      </nav>
      <div className="main-content">
        <img src={frontImage} alt="Front" className="front-image"/>
        <button className="cta-button">Come on in</button>
      </div>
     
    </div>
  );
};

export default Navbar;
