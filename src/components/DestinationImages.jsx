import React from 'react'
export default function DestinationImages(props) {
  return (
    <>
        <div className="destinationImages w-80 relative">
            <div className="dImage">
                <img src={props.dImage} alt="Image" />
            </div>
            <h1>{props.title}</h1>
            <p>{props.descriptions}</p>
            <div className="place">
                <p className="namePlace">
                    {props.namePlace}
                </p>
                <div className='price'>
                    <h1>{props.price}</h1>
                    <p>{props.interest}</p>
                    <button>See More</button>
                </div>
            </div>
        </div>
    </>
  )
}
