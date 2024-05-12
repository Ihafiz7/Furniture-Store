import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-around bg-[#090e1d] text-white font-overpass pt-8'>
        <div className='flex sm:flex-col xl:flex-row items-start justify-around xl:gap-10 sm:gap-2'>
            <div className='flex flex-col items-start justify-center sm:px-4 xl:px-0'>
                <img src="images/vosco.svg" alt="Vosco" className='w-40 h-20' />
                <p className='xl:w-3/5 sm:w-full text-xl font-normal'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className='flex items-center gap-4 mt-8'>
                    <img src="images/facebook.svg" alt="Social Icon facebook" className='w-12 h-12 opacity-80 hover:opacity-100 bg-white rounded-full cursor-pointer' />
                    <img src="images/twitter.svg" alt="Social Icon twitter" className='w-12 h-12 opacity-80 hover:opacity-100 bg-white rounded-full cursor-pointer' />
                    <img src="images/pintrest.svg" alt="Social Icon pintrest" className='w-12 h-12 opacity-80 hover:opacity-100 bg-white rounded-full cursor-pointer' />
                    <img src="images/instagram.svg" alt="Social Icon instagram"  className='w-12 h-12 opacity-80 hover:opacity-100 bg-white rounded-full cursor-pointer'/>
                </div>
            </div>
            <div className='flex items-center justify-between sm:flex-col xl:flex-row gap-8 sm:p-2 xl:p-0'>
                <div className='flex flex-col items-start gap-2 sm:ml-[-90px] xl:ml-0'>
                    <h1 className='text-2xl font-medium'>Shop</h1>
                    <ul className='flex sm:flex-row xl:flex-col items-start gap-4 text-lg font-normal'>
                        <li>ALL</li>
                        <li>Sale</li>
                        <li>Dining</li>
                        <li>LIving</li>
                        <li>Bedroom</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start gap-2'>
                    <h1 className='text-2xl font-medium'>Company</h1>
                    <ul className='flex sm:flex-row xl:flex-col items-start gap-4 text-lg font-normal'>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>FAQ</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='bar my-8'></div>
        <div className='flex items-center sm:flex-col xl:flex-row justify-between w-4/5 sm:gap-4 xl:gap-0 mb-8'>
            <h2 className='text-lg'>© All Rights Reserved. Powered by React</h2>
            <h3 className='bg-gray-600 text-white px-4 rounded-md'>Secure payment by <span className='text-2xl font-extrabold'>stripe</span></h3>
        </div>
    </div>
  )
}

export default Footer

