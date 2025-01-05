import React from 'react';
import { useLocation } from 'react-router-dom';
import './outfit.css';

const Outfit = () => {
  const location = useLocation();
  const { imageUrl } = location.state || {}; 

  return (
    <div className="outfit-container">
      {imageUrl ? (
        <div>
          <img 
            src={imageUrl} 
            alt="Generated Outfit" 
            className="outfit-image" 
          />
          <p className="outfit-message">Here is your recommended outfit based on your preferences!</p>
        </div>
      ) : (
        <p className="outfit-no-image">No image available. Please go back and try again.</p>
      )}
    </div>
  );
};

export default Outfit;
