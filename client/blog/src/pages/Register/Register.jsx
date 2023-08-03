import React from 'react'
import './register.scss'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='register'>
        <spam className="registerTitle">Register</spam>
        <form action="" className="registerForm">
            <label htmlFor="" >Username</label>
            <input type="text" className='registerInput' placeholder='Enter your username...' />
            <label htmlFor="" >Email</label>
            <input type="text" className='registerInput' placeholder='Enter your email...' />
            <label htmlFor="">Password</label>
            <input type="password" className='registerInput' placeholder='Enter your password...' />
            <button className="registerBt">Register</button>
        </form>
        <button className="loginBt">
          <Link className='link' to='/login'>Login</Link>
        </button>
    </div>
  )
}

export default Register