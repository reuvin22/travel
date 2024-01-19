import React from 'react'

export default function DestinationNavbar() {
  return (
    <>
        <div className="grid place-items-center">
            <div className="sm:grid md:grid">
                <p className='text-fuchsia-400 font-bold sm:text-lg 
                md:text-lg
                text-3xl
                text-center'>TOP DESTINATION</p>
                <h1 className='text-2xl font-bold'>Explore top destination</h1>
            </div>
            <div className="flex gap-5 mt-3">
                <a href="">City</a>
                <a href="">Forest</a>
                <a href="">Mountain</a>
                <a href="">Island</a>
                <a href="" className='seeAll'>see all</a>
            </div>
        </div>
    </>
  )
}
