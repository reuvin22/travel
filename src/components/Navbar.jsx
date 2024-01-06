import React from 'react'
import '../design/style.css'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
export default function Navbar() {
  const [close, setClose] = useState(false);

  const handleClose = ()=> {
    setClose(!close);
    console.log(close);
  }
  return (
    <>
        <div className="navContainer" >
            <h1>TraPinas</h1>
            <div className="navLinks">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Destinations</a>
                <a href="">Packages</a>
                <a href="">Blog</a>
                <a href="">Contact Us</a>
            </div>
            <div className="menu">
              <FontAwesomeIcon icon={faBars} style={{"--fa-primary-color": "#f85e98", "--fa-secondary-color": "#5d56c6", width: 90, height: 40}} className='burgerMenu' onClick={handleClose}/>
              <div className="menuContent" style={close ? { display: "block" } : {display:'none'}}>
                <FontAwesomeIcon icon={faX} style={{color: "#5d50c6",}} className='navCloseBtn' onClick={handleClose}/>
                <div className="links">
                  <a href="">Home</a>
                  <a href="">About</a>
                  <a href="">Destinations</a>
                  <a href="">Packages</a>
                  <a href="">Blog</a>
                  <a href="">Contact Us</a>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}
