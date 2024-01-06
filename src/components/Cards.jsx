import React from 'react'

export default function Cards(props) {
  return (
    <>
        <div className="cards">
            <img src={props.image} alt="Image" />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    </>
  )
}
