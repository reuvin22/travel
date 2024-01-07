import React from 'react'

export default function DestinationNavbar() {
  return (
    <>
        <div className="dNavBar">
            <div className="dTitle">
                <p>TOP DESTINATION</p>
                <h1>Explore top destination</h1>
            </div>
            <div className="dLinks">
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
