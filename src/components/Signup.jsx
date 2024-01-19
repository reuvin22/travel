import React from 'react'
import Send from '../img/send.png'

export default function Signup() {
  return (
    <>
        <section className='sm:h-[50vh] md:h-[50vh] h-[40vh] grid place-items-center'>
            <div className="border-2 rounded-3xl h-72 grid place-items-center bg-yellow-400 lg:w-4/5 xl:w-4/5">
                <div className="grid place-items-center ">
                    <h1 className='font-bold text-2xl lg:text-4xl xl:text-4xl'>Sign up to our newsletter</h1>
                    <p className='text-md text-center mt-5 lg:w-4/5 xl:w-4/5 md:w-[80%]'>Lorem ipsum dolor sit amet consectetur. Egestas et feugiat purus enim facilisi nunc blandit nullam.</p>
                    <div className='flex justify-center items-center w-full'>
                        <input type="text" name="signup" id="signupInput" placeholder='Enter your Email Address' className='border-2 rounded-2xl h-12 px-3 mt-5 sm:w-[60%]'/>
                        <img src={Send} alt="Send" className='w-14 relative mt-8 cursor-pointer' />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
