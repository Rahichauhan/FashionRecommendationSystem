import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/SignIn/Signin';
import SignUp from './components/SignUp/SignUp.jsx';
import Home from './components/Home';
import Form from './components/Form/Form';
import Contact from './components/Contact';
import InfiniteSlider from './components/Infiniteanim/Infiniteanim.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div>
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/infiniteanimation" element={<InfiniteSlider/>}/>
          <Route path="/footer" element={<Footer/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
