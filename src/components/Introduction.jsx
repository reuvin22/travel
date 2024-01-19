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
        <section id='home' className='h-[90vh] sm:h-[150vh] md:h-[90vh]'>
            <div className="w-screen flex justify-center items-center gap-10">
                <div className="w-1/2 sm:w-[90%] md:w-screen sm:mt-24 md:mt-24">
                    <div className=''>
                        <div className="flex justify-center items-center border-2 my-5 gap-2 py-3 rounded-3xl w-48 mx-20">
                            <span >Explore the world!</span>
                            <FontAwesomeIcon icon={faBagShopping} style={{color: "#f85e9f", height: 24, width: 24}}/>
                        </div>
                    </div>
                    <div className='text-center text-4xl'><h1>Travel <span style={{ color: '#F85E9F' }}>top destination</span> in the Philippines</h1></div>
                    <div className='text-center text-lg mt-5'><p>Where adventure meets comfort. We create unforgettable travel experiences</p></div>
                    <div className='gap-2 mt-4 flex justify-center items-center sm:w-screen'>
                        <button className='border-2 p-3 rounded-3xl bg-fuchsia-900 text-white'>Get Started</button>
                        <button className='flex gap-1 border-2
                         p-2 rounded-3xl border-fuchsia-500
                         hover:bg-fuchsia-500 hover:text-white'><div className="bg-fuchsia-900 rounded-full w-5 h-5 grid place-content-center"><FontAwesomeIcon icon={faPlay} style={{color: "#f1f4f8", height: 10, width: 10}} /></div>Watch Demo</button>
                    </div>
                </div>
                <div className="flex justify-center items-center
                sm:hidden md:hidden">
                    <img src={Globe} alt="Globe" className='globeGif'/>
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
                <div className='sm:mt-10 md:mt-5 grid place-items-center text-4xl font-bold mt-20'>
                       <h1 className='text-gray-500 mt-10'> Our Partners</h1>
                    </div>
                <div className="sm:grid sm:place-items-center sm:mt-16 md:place-items-center 
                md:grid sm:grid-cols-2 md:grid-cols-2
                sm:gap-8 md:gap-8
                mx-10 flex gap-20 justify-center items-center">
                    <img src={Airbnb} alt="Airbnb" className='partner'/>
                    <img src={PhilippinesAirline} alt="PhilippinesAirline" className='partner'/>
                    <img src={Booking} alt="Booking" className='partner'/>
                    <img src={Tripad} alt="Tripad" className='partner'/>
                </div>
        </section>
    </>
  )
}
