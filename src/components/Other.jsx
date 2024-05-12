import React from 'react'
import othersData from '../data/othersData'

const Other = () => {
  return (
    <div className='flex items-center justify-center gap-4 my-12'>
      <div className='flex items-center sm:flex-col xl:flex-row justify-between w-3/4 font-overpass'>
        {othersData.map((data,index) => (
          <div key={index} className='flex flex-col items-center justify-center gap-4 w-[300px] h-[300px]'>
            <img src={data.img} alt="Icons" className='w-16 h-16 object-cover' />
            <h1 className='text-2xl'>{data.title}</h1>
            <h3 className='text-lg text-center text-gray-400'>{data.text}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Other