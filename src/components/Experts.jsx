import React from 'react'
import Expert from '../img/expert.png'
import Expertise from './Expertise'
import Like from '../img/like.png'
import Heart from '../img/heart.png'
import Pizza from '../img/pizza.png'
export default function Experts() {
  return (
    <>
        <section id="experts">
            <div className="expertContainer">
                <div className="meetExperts">
                    <div className="expertIntro">
                        <h1>Meet Our Expert Tour Guides</h1>
                        <p>Our journeys are enriched by our team of seasoned tour guides. Our guides bring your adventures to life with their expertise, passion</p>
                    </div>
                    <img src={Expert} alt="location" className='expertLocation'/>
                </div>
                <div className="expertise">
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
