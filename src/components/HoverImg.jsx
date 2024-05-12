import { useState } from 'react'

const HoverImg = ({data}) => {
    const [imgSrc, setImgSrc] = useState(data.img1);
  return (
    <div>
      <img
        src={imgSrc}
        alt="Furniture Images"
        className='w-[400px] h-[400px] transition-all'
        onMouseEnter={() => setImgSrc(data.img2)}
        onMouseLeave={() => setImgSrc(data.img1)}
      />
    </div>
  )
}

export default HoverImg