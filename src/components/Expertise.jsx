import React from 'react'
export default function Expertise(props) {
  return (
    <>
        <div className="sm:grid sm:place-items-center 
        md:grid md:place-items-center 
        flex justify-center items-center
        mt-5 sm:w-screen md:w-screen">
            <img src={props.expertLogo} alt="Logo" className='sm:w-20 md:w-14 w-18 h-14'/>
            <div className="sm:w-screen md:w-screen grid place-items-center">
                <h2 className='sm:text-center md:text-center font-bold text-3xl sm:mt-5'>{props.expertTitle}</h2>
                <p className='sm:text-center md:text-center text-lg mt-5 
                sm:text-center 
                md:text-center
                w-5/6'>{props.description}</p>
            </div>
        </div>
    </>
  )
}
