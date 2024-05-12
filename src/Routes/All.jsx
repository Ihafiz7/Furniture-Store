import { Suspense,lazy,useEffect,useState } from "react"
const AllProducts =lazy(() => import("../components/AllProducts"))
const Newsletter = lazy(() => import('../components/Newsletter'))
const Footer = lazy(() => import('../components/Footer'))
const Header = lazy(() => import('../components/Header'))
import allData from "../data/allData"
import Loading from "../components/Loading"



const All = () => {
  const [page, setPage] = useState(0);
  const productPerPage = 9;
  const totalPages = Math.ceil(allData.length / productPerPage);
  const startIndex = page * productPerPage;
  const selectedData = allData.slice(startIndex, startIndex + productPerPage);

  useEffect(() => {
    window.scrollTo(0,0)
  },[page]);

  const handlePrevious = () => {
    setPage(prevPage => Math.max(prevPage - 1, 0));
  };

  const handleNext = () => {
    setPage(prevPage => Math.min(prevPage + 1, totalPages - 1));
  };

  return (
    <Suspense fallback={<Loading />}>
      <Header />
        <div className="flex flex-col items-center">
          <div className="bar my-8 self-center"></div>
            <AllProducts allData={selectedData} />
          <div className="flex gap-5">
            {page > 0 && (<button onClick={handlePrevious} className="font-overpass text-xl px-4 py-2 text-white bg-[#090e1d] rounded-md">
                Previous Page
            </button>
            )}
              {page < totalPages - 1 && (<button onClick={handleNext} className="font-overpass text-xl px-4 py-2 text-white bg-[#090e1d] rounded-md">
                Next Page
              </button>
            )}
          </div>
        </div>
      <Newsletter />
      <Footer />
    </Suspense>
  )
}

export default All
