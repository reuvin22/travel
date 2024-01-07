import React from 'react'
export default function Expertise(props) {
  return (
    <>
        <div className="expertExpertise">
            <img src={props.expertLogo} alt="Logo" />
            <div className="expertExpertiseContent">
                <h2>{props.expertTitle}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    </>
  )
}
