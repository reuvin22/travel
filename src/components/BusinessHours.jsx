import React from 'react'

export default function BusinessHours(props) {
  return (
    <>
        <div className="businessHours">
            <h1>{props.numbers}</h1>
            <h3>{props.title}</h3>
        </div>
    </>
  )
}
