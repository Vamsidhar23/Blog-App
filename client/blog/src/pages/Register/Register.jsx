import React, { useState } from 'react'
import './register.scss'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Register = () => {

    // State variables to store user input and error state
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error,setError] = useState(false);

// Function to handle form submission
const handleSubmit = async (e) => {
  e.preventDefault(); // Prevent the default form submission behavior
  setError(false); // Reset the error state

  try {
    // Send a POST request to register the user
    const res = await axios.post('/api/auth/register', {
      username,
      email,
      password,
    });

    // If registration is successful, redirect to the login page
    res.data && window.location.replace("/login");
  } catch (err) {
    setError(true); // Set error state if an error occurs during registration
  }
};


  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form action="" className="registerForm" onSubmit={handleSubmit}>
            <label htmlFor="" >Username</label>
            <input type="text" className='registerInput' placeholder='Enter your username...' onChange={(e) => setUsername(e.target.value)}/>
            <label htmlFor="" >Email</label>
            <input type="text" className='registerInput' placeholder='Enter your email...'  onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="">Password</label>
            <input type="password" className='registerInput' placeholder='Enter your password...' onChange={(e) => setPassword(e.target.value)} />
            <button className="registerBt" type='submit'>Register</button>
        </form>
        <button className="loginBt">
          <Link className='link' to='/login'>Login</Link>
        </button>
        {error && <span style={{color: "red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  )
}

export default Register