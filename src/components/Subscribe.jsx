import React from 'react'

export const Subscribe = ({innerRef}) => {
  return (
    <div
    className='mt-5 rounded-md flex flex-col justify-center gap-3 p-2 bg-slate-100  text-gray-800'>
        <h2
        id='subscribe'
        ref={innerRef}  
        className=' text-left text-indigo-300 text-2xl sm:text-3xl md:text-4xl font-semibold'
        ><span className='text-indigo-500'>Think</span> with me!
        </h2>
        <p 
        className='text-left text-lg sm:text-xl md:text-2xl font-light'>
        If these ideas resonate with you, we probably think alike.
        I'm always open to better viewpoints.
        </p>
        <p 
        className='text-center text-lg sm:text-xl md:text-2xl font-semibold'
        > <span className='text-indigo-600 font-bold'>Subscribe</span> and stay curious!
        </p>
       <form action="https://formsubmit.co/ameeraashique6@gmail.com" method="POST" className='w-full my-3 max-w-md mx-auto'>
        <div className='relative'>
        <input 
        type="email"
        placeholder='Enter your email'
        className='w-full border border-slate-300 rounded-l-md text-slate-800 bg-slate-50 focus:outline-none px-4 py-2 pr-24 '
        />
        <input type="hidden" name="_captcha" value="false"/>
        <button
          type="submit"
          className="h-full absolute top-1/2 right-0 transform -translate-y-1/2 bg-indigo-500 text-white px-4 py-1.5 rounded-md hover:bg-indigo-600 text-sm"
        >
          Subscribe
        </button>

        </div>
       </form>

    </div>
  )
}
