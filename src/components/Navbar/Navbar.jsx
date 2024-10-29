import React from 'react'
import './Navbar.css'
import assets from '../../assets/assets.js'



const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={assets.logo} />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={assets.search_icon} className="icons" />
        <p>Children</p>
        <img src={assets.bell_icon} className="icons" />
        <div className="navbar-profile">
          <img src={assets.profile_img} className="profile" />
          <img src={assets.caret_icon}  />
          <div className="dropdown">
            <p>Sing out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar