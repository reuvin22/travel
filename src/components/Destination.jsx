import React from 'react'
import Prev from '../img/prevBtn.png'
import Next from '../img/nextBtn.png'
import DestinationImages from './DestinationImages'
import Destination1 from '../img/destination1.png'
import Destination2 from '../img/destination2.png'
import Destination3 from '../img/destination3.png'
export default function Destination() {
  return (
    <>
        <section id='destinations'>
            <div className="grid place-items-center">
                <div className="grid">
                    <div className="w-screen grid place-items-center">
                        <h3 className='text-2xl font-bold text-center'>CHOOSE YOUR NEXT DESTINATION</h3>
                        <h1>Explore top destination</h1>
                    </div>
                    <div className="flex mt-5 h-24 justify-center">
                        <img src={Prev} alt="Previous" className='w-24 h-32 cursor-pointer hover:scale-110'/>
                        <img src={Next} alt="Next" className='w-24 h-32 cursor-pointer hover:scale-110'/>
                    </div>
                </div>
                <div className="flex
                sm:grid sm:gap-y-5
                md:grid md:grid-cols-2
                gap-x-5 md:gap-y-5"
                
                >
                    <DestinationImages
                        dImage = {Destination1}
                        title = "Cappadocia"
                        descriptions = "Lorem Ipsum is simply dummy text of the printing and...see more"
                        namePlace = "Machu Picchu, Peru"
                        price = "$380"
                        interest = "x 12 interest free"
                    />
                    <DestinationImages
                        dImage = {Destination2}
                        title = "Nice and Cannes"
                        descriptions = "Lorem Ipsum is simply dummy text of the printing and...see more"
                        namePlace = "French Riviera, France"
                        price = "$300"
                        interest = "x 12 interest free"
                    />
                    <DestinationImages
                        dImage = {Destination3}
                        title = "Seville"
                        descriptions = "Lorem Ipsum is simply dummy text of the printing and...see more"
                        namePlace = "Seville, Spain"
                        price = "$200"
                        interest = "x 12 interest free"
                    />
                </div>
            </div>
        </section>
    </>
  )
} 
