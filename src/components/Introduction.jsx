import React from 'react'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import PhilippinesAirline from '../img/PhilippinesAirline.png'
import Tripad from '../img/tripad.png'
import Booking from '../img/booking.png'
import Airbnb from '../img/airbnb.png'
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
                    <hr />
                    <div className="places1">
                        <FontAwesomeIcon icon={faLocationDot} style={{color: "#fdd50d", width: 40, height: 25}} />
                        <p>Top Places</p>
                    </div>
                    <div className="places2">
                        <FontAwesomeIcon icon={faLocationDot} style={{color: "#fdd50d", width: 40, height: 25}} />
                        <p>Top Hotels</p>
                    </div>
                    <div className="places3">
                        <FontAwesomeIcon icon={faUsers} style={{color: "#fdd50d", width: 40, height: 25}} />
                        <div className="placeText">
                            <h3>8000+</h3>
                            <p>Customers</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="partnership">
                <div className="partners">
                    <img src={Airbnb} alt="Airbnb" />
                    <img src={PhilippinesAirline} alt="PhilippinesAirline" />
                    <img src={Booking} alt="Booking" />
                    <img src={Tripad} alt="Tripad" />
                </div>
            </div>
        </section>
    </>
  )
}
