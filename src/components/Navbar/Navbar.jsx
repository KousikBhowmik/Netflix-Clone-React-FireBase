import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import assets from '../../assets/assets.js'
import { logOut } from '../../firebase.js';



const Navbar = () => {

  const navRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY >= 350){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove("nav-dark");
      }
    })
  }, [])


  return (
    <div ref={navRef} className="navbar">
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
            <p onClick={() => {logOut()}} >Sing out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar