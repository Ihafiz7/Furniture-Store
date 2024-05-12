import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Header from '../components/Header'
import allData from '../data/allData'
import AllProducts from '../components/AllProducts'

const Sale = () => {
  const livingProducts = allData.filter((p) => p.isSale === 'true')
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center gap-8 font-overpass background-image w-[100dvw] min-h-[85dvh]">
        <h1 className='text-white text-7xl font-extrabold tracking-wider text-center'>SPRING SALE</h1>
        <p className='text-3xl text-center text-white'>Here’s a description of the featured collection or promotion</p>
      </div>
      <div className='mt-20'>
        <AllProducts allData={livingProducts} />
      </div>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Sale