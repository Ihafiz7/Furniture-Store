import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 font-overpass background-image w-[100dvw] min-h-[85dvh]">
        <h1 className='text-white text-7xl font-extrabold tracking-wider text-center'>SPRING SALE</h1>
        <p className='text-3xl text-center text-white'>Here’s a description of the featured collection or promotion</p>
        <button className='p-4 bg-[#090e1d] text-white text-2xl rounded-md hover:opacity-80 hover: transition-all'><Link to='/sale'>SHOP AT SALE</Link></button>
    </div>
  )
}

export default Hero