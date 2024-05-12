import arivalData from '../data/lattestArival'
import HoverImg from './HoverImg'
import { Link } from 'react-router-dom'

const LatestArival = () => {
  return (
    <div className='flex flex-col'>
        <h1 className='mt-4 p-8 font-overpass font-normal text-4xl'>Latest Arivals</h1>
        <div className='flex sm:flex-col xl:flex-row items-center justify-evenly'>
            {arivalData.map ((data, index) =>(
                <div key={index} className='flex flex-col '>
                    <Link to={`/${data.id}`}>
                        <HoverImg data={data} />
                    </Link>
                    <div className='flex flex-col items-start font-overpass font-medium text-2xl py-8'>
                        <p>{data.id}</p>
                        <p className='text-gray-400'> {data.price} </p>
                    </div>
                </div>
            ) )}
        </div>
    </div>
  )
}

export default LatestArival