import React from 'react'
export default function Expertise(props) {
  return (
    <>
        <div className="grid place-items-center mt-5 w-screen">
            <img src={props.expertLogo} alt="Logo" className='w-20'/>
            <div className="w-screen grid place-items-center">
                <h2 className='text-center font-bold text-3xl'>{props.expertTitle}</h2>
                <p className='text-lg mt-5 text-center w-5/6'>{props.description}</p>
            </div>
        </div>
    </>
  )
}
