import React from 'react'
export default function Expertise(props) {
  return (
    <>
        <div className="grid place-items-center mt-5">
            <img src={props.expertLogo} alt="Logo" className='w-20'/>
            <div className="expertExpertiseContent">
                <h2 className='text-center font-bold text-3xl'>{props.expertTitle}</h2>
                <p className='text-2xl mt-5'>{props.description}</p>
            </div>
        </div>
    </>
  )
}
