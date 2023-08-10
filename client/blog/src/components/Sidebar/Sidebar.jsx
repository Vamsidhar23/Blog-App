import React, { useEffect, useState } from 'react'
import './sidebar.scss'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get('/api/categories');
            setCats(res.data);
        }
        getCats();
    })

  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHo-4lSMoZ9iK3A1onMufxIrOVxt2PwLgette1TlsJvo6PEaGHXHTtNmOn77GEtDbi2Y0&usqp=CAU" 
            alt="" />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis nisl sed consectetur sollicitudin. 
                Pellentesque habitant morbi tristique senectus et netus et malesuada fame.
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                {cats.map((c) => (
                <Link className='link' to={`/?catName=${c.name}`}>
                    <li className="sidebarListItem">{c.name}</li>
                </Link>
                ))}
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarIcon fa-brands fa-linkedin"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar