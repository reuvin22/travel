import React from 'react'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Globe from '../img/globe1.gif'

export default function Introduction() {
  return (
    <>
        <section id='home'>
            <div className="homeContainer">
                <div className="introduction">
                    <div className="explore">
                        <span>Explore the world!</span>
                        <FontAwesomeIcon icon={faBagShopping} style={{color: "#f85e9f", height: 24, width: 24}}/>
                    </div>
                    <div className='travel'><h1>Travel <span style={{ color: '#F85E9F' }}>top destination</span> in the Philippines</h1></div>
                    <div className='shortIntro'><p>Where adventure meets comfort. We create unforgettable travel experiences</p></div>
                    <div className='introBtn'>
                        <button className='getStarted'>Get Started</button>
                        <button className='watchDemo'><div className="playbtn"><FontAwesomeIcon icon={faPlay} style={{color: "#f1f4f8", height: 10, width: 10}} /></div>Watch Demo</button>
                    </div>
                </div>
                <div className="images">
                    <div className="globe"><img src={Globe} alt="Globe" className='globeGif'/></div>
                </div>
            </div>
        </section>
    </>
  )
}
