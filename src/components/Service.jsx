import React from 'react'
import Cards from './Cards'
import Lots from '../img/lots.png'
import Tour from '../img/TourGuide.png'
import Book from '../img/book.png'

export default function Service() {
  return (
    <>
        <section>
            <div className="flex gap-x-8 border-8 justify-center items-center sm:grid sm:grid-cols-2 
            md:grid md:grid-cols-2 sm:place-items-center md:place-items-center">
                <div className='grid w-52 sm:text-sm md:text-sm'>
                    <h3 className='text-fuchsia-400 text-2xl sm:text-center md:text-center'>What we service</h3>
                    <h1 className='font-bold md:text-center sm:text-center'>Top values for you</h1>
                    <p className='sm:text-center md:text-center'>Embrace life's vastness, venture forth</p>
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
