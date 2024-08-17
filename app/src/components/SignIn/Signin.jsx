import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../SignUp/Signup.css';
import Signimg from '../../assets/Signin.png';
import Logo from '../../assets/Logo.png';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/", {
        email,
        password
      });
      
      if (response.data === "exist") {
        navigate("/home");
      } else if (response.data === "notexist") {
        alert("User has not signed up");
      }
    } catch (error) {
      alert("Wrong details");
      console.log(error);
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container2">
        <div className="signup-image">
          <img className="logo2" src={Logo} alt='logo'/>
          <img className="sign-img2" src={Signimg} alt="Fashion Choice" />
        </div>
        <div className="signup-form-container">
          <div className="signup-form2">
            <h2>Login</h2>
            <form onSubmit={submit}>
              <div className="input-group2">
                <label>Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </div>
              <div className="input-group2">
                <label>Password</label>
                <input 
                  type="password" 
                  name="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
              </div>
              <button type="submit" className="create-account2">Login</button>
            </form>
            <div className="alternate-login2">
              <p>Don't have an account? <Link to="/signup"><span className='signup1' >Sign Up </span></Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
