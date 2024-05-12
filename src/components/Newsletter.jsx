import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-8 font-overpass sm:my-4 xl:my-16'>
        <h1 className='text-4xl font-semibold tracking-wide'>Join our mailing list</h1>
        <h3 className='text-2xl font-normal text-gray-400 sm:w-3/4 xl:w-1/2 text-center'>Sign up to receive inspiration, product updates, and special offers from our team.</h3>
        <div className='flex items-center justify-center sm:flex-col xl:flex-row gap-4 w-full sm:px-2 xl:px-0'>
            <input type="email" placeholder='Email Address' className='sm:w-full xl:w-[350px] p-4 focus:outline-none border border-gray-400 text-xl rounded-sm' />
            <button className='sm:w-full xl:w-[200px] h-16 p-2 bg-black text-white rounded-md text-xl font-medium hover:opacity-80 hover:transition-all hover:text-green-600'>SUBSCRIBE</button>
        </div>
        <h4 className='xl:text-xl sm:text-lg sm:px-2 xl:px-0'>We’ll never share your details. View our <a href="/Privacy Policy" className='text-gray-400 hover:text-green-600'> Privacy Policy</a></h4>
        <div className='bar mt-8'></div>
    </div>
  )
}

export default Newsletter
