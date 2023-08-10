import React, { useContext } from 'react'
import './topbar.scss'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

const Topbar = () => {

      // Accessing user context using useContext hook - consumer
    const {user,dispatch} = useContext(Context);

    const PF = "http://localhost:5000/images/";

    const handleClick = () => {
        dispatch({type:"LOG_OUT"});
    }

  return (
    <div className='topbar'>
        <div className="topleft">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <i className="topIcon fa-brands fa-square-facebook"></i>
        </a>
        <a href="https://github.com/Vamsidhar23" target="_blank" rel="noopener noreferrer">
            <i className="topIcon fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/vamsidhar-gokavarapu-5576b8201/" target="_blank" rel="noopener noreferrer">
            <i className="topIcon fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="topIcon fa-brands fa-square-instagram"></i>
        </a>

        </div>
        <div className="topcenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link className='link' to='/'>HOME</Link>
                </li>
                <li className="topListItem">
                    <Link className='link' to='/'>ABOUT</Link>
                </li>
                <li className="topListItem">
                    <Link className='link' to='/register'>CONTACT</Link>
                </li>
                <li className="topListItem">
                    <Link className='link' to='/write'>WRITE</Link>
                </li>
                <li className="topListItem">
                    <Link className='link' to='/login' onClick={handleClick}>
                        {user && "LOGOUT"}
                    </Link>
                </li>

            </ul>
        </div>
        <div className="topright">
            {
                user ? (

                  <Link to='/settings'>
                    <img src={PF + user.profilePic} 
                    alt="" className="topImg" />
                  </Link>
                ) : (

                    <ul className="topList">
                    <li className="topListItem">
                      <Link className="link" to="/login">
                        LOGIN
                      </Link>
                    </li>
                    <li className="topListItem">
                      <Link className="link" to="/register">
                        REGISTER
                      </Link>
                    </li>
                  </ul>

                )
            }
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>

    </div>
  )
}

export default Topbar