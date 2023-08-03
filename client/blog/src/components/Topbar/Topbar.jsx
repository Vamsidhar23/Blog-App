import React from 'react'
import './topbar.scss'
import { Link } from 'react-router-dom';

const Topbar = () => {

    const user = true;

  return (
    <div className='topbar'>
        <div className="topleft">
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-linkedin"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
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
                    <Link className='link' to='/'>CONTACT</Link>
                </li>
                <li className="topListItem">
                    <Link className='link' to='/write'>WRITE</Link>
                </li>
                <li className="topListItem">
                    <Link className='link' to='/login'>
                        {user && "LOGOUT"}
                    </Link>
                </li>

            </ul>
        </div>
        <div className="topright">
            {
                user ? (

                  <Link to='/settings'>
                    <img src="data:image/jpeg;base64,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" 
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