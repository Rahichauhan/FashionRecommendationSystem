import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/SignIn/Signin';
import SignUp from './components/SignUp/SignUp.jsx';
import Home from './components/Home';
import Form from './components/Form/Form';
import InfiniteSlider from './components/Infiniteanim/Infiniteanim.js';
import Footer from './components/Footer/Footer.js';
import SpiritAnimal from './components/SpiritAnimal/SpiritAnimal.js';
import About from './components/About/about.js';
import Works from './components/Works/works.js';
import Navbar from './components/LandingPage/Navbar.jsx';
import ContactUs from './components/Contact/Contact.js';

function App() {
  return (
    <div>
     <Home/>
    <Router>
        <Routes>
          <Route path='/l' element= {<Navbar/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/infiniteanimation" element={<InfiniteSlider/>}/>
          <Route path="/footer" element={<Footer/>}/>
          <Route path="/spiritanimal" element={<SpiritAnimal/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/works" element={<Works/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
