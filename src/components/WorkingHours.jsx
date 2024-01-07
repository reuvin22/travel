import React from 'react'
import Girl from '../img/girl.png'
import Circle1 from '../img/circle1.png'
import Circle2 from '../img/circle2.png'
import Circle3 from '../img/circle3.png'
import Circle4 from '../img/circle4.png'
import Circle5 from '../img/circle5.png'
import BusinessHours from './BusinessHours'

export default function WorkingHours() {
  return (
    <>
        <section id="workingHours">
            <div className="whContent">
                <div className="whImages">
                    <div className="circle">
                        <img src={Girl} alt="Girl" className='girl'/>
                        <img src={Circle1} alt="Circle1" className='circle1'/>
                        <img src={Circle2} alt="Circle2" className='circle2'/>
                        <img src={Circle3}  alt="Circle3" className='circle3'/>
                        <img src={Circle4}  alt="Circle4" className='circle4'/>
                        <img src={Circle5}  alt="Circle5" className='circle5'/>
                    </div>
                </div>
                <div className="wHours">
                    <h3>WHAT ARE THE BEST FOR YOU</h3>
                    <h1>Unlock Your Dream Destination</h1>
                    <p>We are dedicated to making your journey of discovery truly unforgettable. Our team of passionate travel experts is here to assist you in finding the destination of your dreams.</p>
                    <div className="bHours">
                        <BusinessHours 
                            numbers = "4k+"
                            title = "Satisfied Customers"
                        />
                        <BusinessHours 
                            numbers = "1000+"
                            title = "Global Destinations"
                        />
                        <BusinessHours 
                            numbers = "24/7"
                            title = "Customer Support"
                        />
                        <BusinessHours 
                            numbers = "100%"
                            title = "Dedication"
                        />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
