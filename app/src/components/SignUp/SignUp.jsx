import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Signimg from '../../assets/Signin.png';
import Logo from '../../assets/Logo.png';
import './Signup.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFname] = useState("");
  const [lastname, setLname] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !email || !password) {
      alert("All fields are required");
      return;
    }
    try {
      await axios.post("http://localhost:3000/signup", {
        firstname,
        lastname,
        email,
        password
      });
      navigate("/");  // Redirect to home page after successful signup
    } catch (error) {
      alert("An error occurred");
      console.log(error);
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <div className="signup-image">
          <img className="logo" src={Logo} alt='logo' />
          <img className="sign-img" src={Signimg} alt="Fashion Choice" />
        </div>
        <div className="signup-form-container">
          <div className="signup-form">
            <h2>Create Account</h2>
            <form onSubmit={submit}>
              <div className="input-group">
                <label>First name</label>
                <input 
                  type="text" 
                  name="firstname" 
                  value={firstname} 
                  onChange={(e) => setFname(e.target.value)} 
                  required 
                />
              </div>
              <div className="input-group">
                <label>Last name</label>
                <input 
                  type="text" 
                  name="lastname" 
                  value={lastname} 
                  onChange={(e) => setLname(e.target.value)} 
                  required 
                />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input 
                  type="password" 
                  name="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
              </div>
              <button type="submit" className="create-account">Create Account</button>
            </form>
            <div className="alternate-login">
              <p>Already have an account? <Link to="/"><span className='login1'>Login</span></Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
