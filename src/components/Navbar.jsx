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
        <div className="w-[89%] md:gap-[20%] ml-10 mt-10 flex justify-center items-center space-x-64 h-12 md:space-x-24 sm:space-x-32" >
            <h1 className='text-4xl font-bold text-gradient'>TraPinas</h1>
            <div className="flex text-xl gap-6 sm:hidden">
                <a href="#home" className='nav'>Home</a>
                <a href="#service" className='nav'>About</a>
                <a href="#destination" className='nav'>Destinations</a>
                <a href="" className='nav'>Packages</a>
                <a href="" className='nav'>Blog</a>
                <a href="" className='nav'>Contact</a>
            </div>
            <div className='hidden sm:block md:block'>
            <div className={`absolute w-screen h-80 left-0 bg-fuchsia-400 mt-2 ${close ? 'sm:block md:block': 'hidden'}`}>
              <FontAwesomeIcon icon={faX} 
              style={{color: "#fafcff", width:40, height:30, 
              marginTop:20, position:'absolute', right:0, marginRight: 
              20, cursor:'pointer'}} 
              onClick={handleClose}/>
              <div className='mt-12 w-screen text-white 
              grid place-items-center gap-4'>
                <a href="#home" className='nav'>Home</a>
                <a href="#service" className='nav'>About</a>
                <a href="#destination" className='nav'>Destinations</a>
                <a href="" className='nav'>Packages</a>
                <a href="" className='nav'>Blog</a>
                <a href="" className='nav'>Contact</a>
              </div>
            </div>
            <FontAwesomeIcon icon={faBars} style={{"--fa-primary-color": "#ce0de7", "--fa-secondary-color": "#94369b", width:40, height:40, marginRight:40, cursor:'pointer'}} onClick={handleClose}/>
            </div>
          </div>
    </>
  )
}
