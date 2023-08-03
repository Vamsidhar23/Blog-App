import React from 'react'
import './header.scss'

const Header = () => {
  return (
    <div className='header'>
         <div className="headerTitles">
            <span className="headerTitleSl">Nature Environment </span>
            <span className="headerTitleLg">Blog</span>
         </div>
         <img src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg" 
         alt="" 
         className="headerImg" />
    </div>
  )
}

export default Header