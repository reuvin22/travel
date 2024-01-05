import React from 'react'
import '../design/style.css'
export default function Navbar() {
  return (
    <>
        <div className="navContainer">
            <h1>Travlog</h1>
            <div className="navLinks">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Destinations</a>
                <a href="">Packages</a>
                <a href="">Blog</a>
                <a href="">Contact Us</a>
            </div>
        </div>
    </>
  )
}
