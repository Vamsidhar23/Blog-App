import React from 'react'
import './login.scss'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
        <spam className="loginTitle">Login</spam>
        <form action="" className="loginForm">
            <label htmlFor="" >Email</label>
            <input type="text" className='loginInput' placeholder='Enter your email...' />
            <label htmlFor="">Password</label>
            <input type="password" className='loginInput' placeholder='Enter your password...' />
            <button className="loginBt">Login</button>
        </form>
        <button className="registerBt">
        <Link className='link'to='/register'>Register</Link>
        </button>
    </div>
  )
}

export default Login