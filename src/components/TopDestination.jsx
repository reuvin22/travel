import React from 'react'
import DestinationNavbar from './DestinationNavbar'
import DestinationImages from './DestinationImages'
import Destination1 from '../img/destination1.png'
import Destination2 from '../img/destination2.png'
import Destination3 from '../img/destination3.png'

export default function TopDestination() {
  return (
    <>
        <section id="topDestination">
            <DestinationNavbar />
            <div className="moreDestination">
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
        </section>
    </>
  )
}
