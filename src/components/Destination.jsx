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
        <section id="destination">
            <div className="destination">
                <div className="headers">
                    <div className="destinationIntro">
                        <h3>CHOOSE YOUR NEXT DESTINATION</h3>
                        <h1>Explore top destination</h1>
                    </div>
                    <div className="arrows">
                        <img src={Prev} alt="Previous" />
                        <img src={Next} alt="Next" />
                    </div>
                </div>
                <div className="listDestination">
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
