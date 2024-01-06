import React from 'react'
import Cards from './Cards'
import Lots from '../img/lots.png'
import Tour from '../img/TourGuide.png'
import Book from '../img/book.png'

export default function Service() {
  return (
    <>
        <section id="service">
            <div className="services">
                <div className='values'>
                    <h3>What we service</h3>
                    <h1>Top values for you</h1>
                    <p>Embrace life's vastness, venture forth</p>
                </div>
                <Cards 
                    image = {Lots}
                    title = "Lot of Choices"
                    description = "Embrace life's vastness, venture forth,"
                />
                <Cards 
                    image = {Tour}
                    title = "Best Tour Guide"
                    description = "Embrace life's vastness, venture forth,"
                />
                <Cards 
                    image = {Book}
                    title = "Easy Booking"
                    description = "Embrace life's vastness, venture forth,"
                />
            </div>
        </section>
    </>
  )
}
