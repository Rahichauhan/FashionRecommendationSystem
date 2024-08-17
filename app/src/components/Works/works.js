import React from 'react';
import './works.css';
import style1 from '../../assets/style1.jpg';
import style2 from '../../assets/style2-removebg-preview.png';
import style3 from '../../assets/style3-removebg-preview.png';
function Works() {
  return (
    <div className='page'>
    <div className='page-heading'> HOW IT WORKS</div>
    <div className="container">
      <div className="item">
        <img src={style1} alt="image" />
        <p>1. Fill out your style details</p>
        <p>Share your style, outing, and lifestyle preferences with Our StyleSync.</p>
      </div>
      <div className="item">
        <img src={style2} alt="Placeholder" />
        <p>2. Get Styled</p>
        <p>Get handed-selected pieces of clothing according to your style.</p>
      </div>
      <div className="item">
        <img src={style3} alt="Placeholder" />
        <p>3. Get what you loved</p>
        <p>Choose the one which you loved and nail the floor you walk on.</p>
      </div>
    </div>
    </div>
  );
}

export default Works;
