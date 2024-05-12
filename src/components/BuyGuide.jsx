import buydata from "../data/buydata"

const BuyGuide = () => {
  return (
    <div className='flex flex-col items-center justify-center font-overpass'>
        <div className="my-8">
            <h1 className='text-3xl font-semibold'>How it works</h1>
        </div>
        <div className="flex sm:flex-col xl:flex-row">
            {buydata.map((data,index)=>(
                <div key={index} className="flex flex-col items-center justify-around gap-4">
                    <div className="relative flex items-center justify-center">
                        <img src={data.img} alt="Images" className='w-[300px] h-[300px] object-cover' />
                        <p className="flex items-center justify-center w-[70px] h-[70px] text-4xl  text-white text-bold border-[8px] border-white p-1 rounded-full bg-black absolute bottom-[-30px] ">{data.no}.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-6 mt-5">
                        <p className="text-2xl font-medium">{data.text}</p>
                        <p className="text-center text-xl w-4/5 h-auto">{data.subtext}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className='bar my-8'></div>
    </div>
  )
}

export default BuyGuide