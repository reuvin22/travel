import React from 'react'
import Send from '../img/send.png'

export default function Signup() {
  return (
    <>
        <section id="signup">
            <div className="signupContainer">
                <div className="signupContent">
                    <h1>Sign up to our newsletter</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Egestas et feugiat purus enim facilisi nunc blandit nullam.</p>
                    <div className='emailSend'>
                        <input type="text" name="signup" id="signupInput" placeholder='Enter your Email Address'/>
                        <img src={Send} alt="Send" className='sendImg' />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
