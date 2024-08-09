import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

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
    <div>
      <h1 className='font-extrabold'>Login</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
      <p>OR</p>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}

export default Login;
