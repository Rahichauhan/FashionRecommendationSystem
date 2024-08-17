import React from 'react'
import Footer from './Footer/Footer.js';
import Works from './Works/works.js';
import Navbar from './LandingPage/Navbar.jsx';
import InfiniteSlider from './Infiniteanim/Infiniteanim.js';
import About from './About/about.js';
import ContactUs from './Contact/Contact.js';

const Home = () => {
  return (
    <div>
       <Navbar/>
      <Works/>
      <InfiniteSlider/>
      <About/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Home