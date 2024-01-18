import React from 'react'
import Send from '../img/send.png'

export default function Signup() {
  return (
    <>
        <section className='h-[50vh]'>
            <div className="border-2 rounded-3xl h-72 grid place-items-center bg-yellow-400">
                <div className="grid place-items-center ">
                    <h1 className='font-bold text-2xl'>Sign up to our newsletter</h1>
                    <p className='text-md text-center mt-5'>Lorem ipsum dolor sit amet consectetur. Egestas et feugiat purus enim facilisi nunc blandit nullam.</p>
                    <div className='flex justify-center '>
                        <input type="text" name="signup" id="signupInput" placeholder='Enter your Email Address' className='border-2 rounded-2xl h-12 px-3'/>
                        <img src={Send} alt="Send" className='w-14 absolute right-0 mr-8' />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
