import React from 'react'
import Expert from '../img/expert.png'
import Expertise from './Expertise'
import Like from '../img/like.png'
import Heart from '../img/heart.png'
import Pizza from '../img/pizza.png'
export default function Experts() {
  return (
    <>
        <section className='h-[140vh]'>
            <div className="grid border-8">
                <div className="grid">
                    <div className="border-8 w-screen">
                        <h1 className='text-3xl font-bold text-center'>Meet Our Expert Tour Guides</h1>
                        <p className='text-center mt-5 text-lg'>Our journeys are enriched by our team of seasoned tour guides. Our guides bring your adventures to life with their expertise, passion</p>
                    </div>
                    <div className='w-screen grid place-items-center'>
                        <img src={Expert} alt="location" className='w-96 h-62 mt-5'/>
                    </div>
                </div>
                <div className="grid w-screen">
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
