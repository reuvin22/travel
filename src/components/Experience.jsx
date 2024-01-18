import React from 'react'
import BusinessHours from './BusinessHours'
import AirplaneLeft from '../img/airplaneLeft.png'
import AirplaneRight from '../img/airplaneRight.png'
import ArrowLeft from '../img/arrowLeft.png'
import ArrowRight from '../img/arrowRight.png'
import Men from '../img/man.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Experience() {
  return (
    <>
        <section className='sm:h-[120vh] overflow-x-hidden'>
            <div className="">
                <div className="w-screen grid place-items-center">
                    <h3 className='text-fuchsia-500 text-3xl font-bold my-5'>Our Experience</h3>
                    <h1 className='text-lg font-bold my-5'>Crafting Unforgettable Adventures</h1>
                    <p className='text-center text-md w-5/6'>We excel in curating remarkable journeys, specializing in outdoor destinations around the globe. With a wealth of experience, we bring adventures to life and invite you to embark on your own. The call of nature awaits—begin your adventure today!</p>
                    <div className="grid place-items-center">
                        <BusinessHours 
                            numbers = "1000+"
                            title = "outdoor destinations"
                        />
                        <BusinessHours 
                            numbers = "98%"
                            title = "customer satisfaction"
                        />
                        <BusinessHours 
                            numbers = "15+"
                            title = "Years Of Experience"
                        />
                    </div>
                </div>
                <div className="menTravel sm:hidden">
                    <div className="circle2">
                        <img src={Men} alt="Man" className='man'/>
                        <img src={AirplaneLeft} alt="" className='airplane1'/>
                        <img src={AirplaneRight} alt="" className='airplane2'/>
                        <img src={ArrowLeft} alt="" className='arrowLeft'/>
                        <img src={ArrowRight} alt="" className='arrowRight'/>
                        <div className="expCard1">
                        <FontAwesomeIcon icon={faLocationDot} style={{color: "#fdd50d", width: 40, height: 25}} />
                        <p>Best Fun</p>
                    </div>
                    <div className="expCard2">
                        <FontAwesomeIcon icon={faLocationDot} style={{color: "#fdd50d", width: 40, height: 25}} />
                        <p>Best Adventures</p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
