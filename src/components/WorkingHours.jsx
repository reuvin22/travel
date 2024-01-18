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
        <section className='h-[50vh] sm:h-[142vh] md:h-[142vh] overflow-x-hidden'>
            <div className="flex">
                <div className="sm:hidden md:hidden w-1/2 grid place-items-center">
                    <div className="circle">
                        <img src={Girl} alt="Girl" className='girl'/>
                        <img src={Circle1} alt="Circle1" className='circle1'/>
                        <img src={Circle2} alt="Circle2" className='circle2'/>
                        <img src={Circle3}  alt="Circle3" className='circle3'/>
                        <img src={Circle4}  alt="Circle4" className='circle4'/>
                        <img src={Circle5}  alt="Circle5" className='circle5'/>
                    </div>
                </div>
                <div className="grid place-items-center w-1/2 sm:w-screen md:w-screen">
                    <h3 className='text-fuchsia-700 text-2xl font-bold text-center'>WHAT ARE THE BEST FOR YOU</h3>
                    <h1 className='text-lg font-bold'>Unlock Your Dream Destination</h1>
                    <p className='text-lg text-center mt-5 w-4/6 sm:text-sm md:text-sm'>We are dedicated to making your journey of discovery truly unforgettable. Our team of passionate travel experts is here to assist you in finding the destination of your dreams.</p>
                    <div className="grid grid-cols-2 gap-x-5
                    sm:grid-cols-1 sm:gap-y-2">
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
