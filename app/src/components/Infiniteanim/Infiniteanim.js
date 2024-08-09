import React, { useEffect, useRef } from 'react';
import './Infiniteanim.css';
import image1 from "../../assets/dl.beatsnoop.com-3000-D4ypT1j0iG.jpg";
import image2 from "../../assets/heather-ford-5gkYsrH_ebY-unsplash.jpg";
import image3 from "../../assets/junko-nakase-Q-72wa9-7Dg-unsplash.jpg";
import image4 from "../../assets/leslie-leon-9cOAfYJjJUk-unsplash.jpg";
import image5 from "../../assets/[fetchpik.com]-high-stZlyXEjYi.jpg";
import image6 from "../../assets/dl.beatsnoop.com-3000-oaFysqgvjD.jpg";
const InfiniteSlider = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;
    
    const scrollImages = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
        scrollAmount = 0;
      } else {
        scrollAmount += 1;
        container.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(scrollImages, 10);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="Container">
  <div className="image-container" ref={containerRef}>
  <div className="scroll-wrapper"> 
     <img src={image1} alt="Image 1" className="scroll-image" />
      <img src= {image2}alt="Image 2" className="scroll-image" />
      <img src={image3} alt="Image 3" className="scroll-image" />
      <img src={image4} alt="Image 4" className="scroll-image" />
      <img src={image5} alt="Image 5" className="scroll-image" />
      <img src= {image6}alt="Image 6" className="scroll-image" />

      <img src={image1} alt="Image 1" className="scroll-image" />
      <img src= {image2}alt="Image 2" className="scroll-image" />
      <img src={image3} alt="Image 3" className="scroll-image" />
      <img src={image4} alt="Image 4" className="scroll-image" />
      <img src={image5} alt="Image 5" className="scroll-image" />
      <img src= {image6}alt="Image 6" className="scroll-image" />
      </div>
      </div>
    </div>
  );
};

export default InfiniteSlider;

