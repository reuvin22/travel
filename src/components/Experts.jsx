import React from 'react'
import Expert from '../img/expert.png'
import Expertise from './Expertise'
import Like from '../img/like.png'
import Heart from '../img/heart.png'
import Pizza from '../img/pizza.png'
export default function Experts() {
  return (
    <>
        <section className='my-20'>
            <div className="sm:grid md:grid flex mx-10 sm:mx-0 md:mx-0">
                <div className="sm:grid md:grid w-[50%]">
                    <div className="sm:w-screen sm:grid sm:place-items-center
                    md:w-screen md:grid md:place-items-center
                    w-[100%]">
                        <h1 className='text-4xl text-fuchsia-500 font-bold text-center'>Meet Our Expert Tour Guides</h1>
                        <p className='text-center mt-5 text-lg w-5/6'>Our journeys are enriched by our team of seasoned tour guides. Our guides bring your adventures to life with their expertise, passion</p>
                    </div>
                    <div className='sm:w-screen md:w-screen grid
                    place-items-center w-[100%]'>
                        <img src={Expert} alt="location" className='sm:w-80 sm:h-62 
                        md:w-80 md:h-62
                        w-96
                        mt-5'/>
                    </div>
                </div>
                <div className="grid sm:w-screen md:w-screen w-[50%]">
                    <Expertise 
                        expertLogo = {Like}
                        expertTitle = "Expertise"
                        description = "Our guides are experts in their fields, ensuring in-depth knowledge and insights into every destination."
                    />
                    <Expertise 
                        expertLogo = {Heart}
                        expertTitle = "Passion"
                        description = "They are passionate about travel, culture, and history, making your journey engaging and captivating."
                    />
                    <Expertise 
                        expertLogo = {Pizza}
                        expertTitle = "Dedication"
                        description = "Our guides are dedicated to providing exceptional service and ensuring your travel memories are truly unforgettable."
                    />
                </div>
            </div>
        </section>
    </>
  )
}
