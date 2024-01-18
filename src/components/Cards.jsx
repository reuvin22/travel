import React from 'react'

export default function Cards(props) {
  return (
    <>
        <div className="w-52 grid place-items-center text-center sm:text-sm md:text-sm">
            <img src={props.image} alt="Image" className='logo'/>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    </>
  )
}
