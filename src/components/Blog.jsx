import React from 'react'
import blogData from '../data/blogdata'

const Blog = () => {
  return (
    <div className=' flex flex-col font-overpass bg-gray-100'>
        <h1 className='text-3xl font-regular px-8 my-8'> From our blog</h1>
        <div className='flex items-center justify-around sm:flex-col xl:flex-row px-2 gap-4'>
            {blogData.map((data, index) => (
                <div key={index}>
                    <img src={data.img} alt="Images" className='w-[400px] h-[400px] object-cover cursor-pointer' />
                    <div className='flex flex-col items-start my-4'>
                        <p className=' text-gray-400 text-xl'>{data.date}</p>
                        <h1 className='text-2xl w-[90%]'>{data.title}</h1>
                    </div>
                </div>            
            ))}
        </div>
        
    </div>
  )
}

export default Blog