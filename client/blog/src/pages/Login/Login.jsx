import React, { useContext, useRef } from 'react'
import './login.scss'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import axios from 'axios';

// Define the Login component
const Login = () => {
  // Create ref objects to store input elements
  const userRef = useRef(); // Ref for username input
  const passwordRef = useRef(); // Ref for password input

  // Destructure values from the context using useContext - used as a consumer
  const { dispatch, isFetching } = useContext(Context);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    
    // Dispatch the LOGIN_START action to indicate login process start
    dispatch({ type: "LOGIN_START" });

    try {
      // Send a login request using axios
      const res = await axios.post('/api/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });

      // Dispatch the LOGIN_SUCCESS action with the response data
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      // Dispatch the LOGIN_FAILURE action if an error occurs
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };


  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm" onSubmit={handleSubmit}>
            <label htmlFor="" >Username</label>
            <input type="text" className='loginInput' placeholder='Enter your username...' ref={userRef} />
            <label htmlFor="">Password</label>
            <input type="password" className='loginInput' placeholder='Enter your password...' ref={passwordRef}/>
            <button className="loginBt" type='submit' disabled={isFetching}>Login</button>  {/*Here disabled attribute conditionally disables the button based on the value of the isFetching variable. If isFetching is true, the button will be disabled; otherwise, it will be enabled.*/} 
        </form>
        <button className="registerBt">
        <Link className='link'to='/register'>Register</Link>
        </button>
    </div>
  )
}

export default Login