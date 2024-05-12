import React from 'react'
import range from '../data/range'
import { Link } from 'react-router-dom'

const Range = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-16 my-4 mb-5'>
        <div className='self-start px-8 ml-4 mt-4'>
            <h1 className='text-3xl font-semibold font-overpass '> Browse The Range</h1>
        </div>
        <div className='flex sm:flex-col xl:flex-row items-center justify-evenly gap-8'>
            {range.map((data, index) => (
                <div key={index} className='flex relative'>
                    <Link to={`/${data.link}`}>
                        <img src={data.img} alt="Range Images" className='w-[400px] h-[450px] object-cover hover:scale-105 hover:opacity-80 hover:transition-all cursor-pointer' />
                    </Link>
                    <p className='absolute top-5 left-5 font-overpass text-2xl font-medium'>{data.text}</p>
                </div>
            ))}
        </div>
        <div className='bar'></div>
    </div>

  )
}

export default Range