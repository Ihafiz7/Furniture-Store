import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center sm:gap-4 xl:gap-16 sm:my-0 xl:my-4'>
        <div className='bar'></div>
        <div className='flex items-center justify-center sm:gap-2 xl:gap-10 w-[100dvw] sm:h-auto xl:h-[100dvh] sm:p-2 xl:p-8'>
            <div className='flex items-center justify-center sm:w-1/2 sm:pl-4 xl:pl-28'>
                <div className='relative'>
                    <img src="images/bg1.jpeg" alt="About Picture" className='w-full h-full object-cover' />
                </div>
                <div className='absolute left-[175px] sm:hidden xl:flex'>
                    <img src="images/bg12.jpg" alt="About Picture" className='w-[300px] h-[300px] object-cover border-[15px] border-white' />
                </div>  
            </div>
            <div className='flex flex-col sm:gap-2 xl:gap-8 sm:w-1/2 xl:w-[400px] font-overpass'>
                <h1 className='sm:text-lg xl:text-3xl font-semibold'>Beautify Your Space</h1>
                <p className=' sm:text-base xl:text-xl font-normal text-gray-400 sm:h-[200px] sm:overflow-hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ratione culpa iste id nam animi. Voluptatibus aut facilis quae, fugit in hic laborum, nemo distinctio, nobis doloribus sequi </p>
                <a href="/about" className='sm:text-lg xl:text-2xl font-medium'>Learn More</a>
            </div>
        </div>
        <div className='bar'></div>
    </div>
  )
}

export default About