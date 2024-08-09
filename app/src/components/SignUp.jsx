import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const history = useNavigate();
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
      const response = await axios.post("http://localhost:3000/signup", {
        firstname,
        lastname,
        email,
        password
      });
      
        history("/");
       
    } catch (error) {
      alert("An error occurred");
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className='font-extrabold'>Sign Up</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder='First Name'
          onChange={(e) => setFname(e.target.value)}
        />
        <input
          type="text"
          placeholder='Last Name'
          onChange={(e) => setLname(e.target.value)}
        />
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
      <Link to="/">Login</Link>
    </div>
  );
}

export default SignUp;
