import HoverImg from "./HoverImg";
import { Link } from "react-router-dom";

const AllProducts = ({allData}) => {
  return (
    <div className="grid xl:grid-cols-3 sm:grid-cols-1 place-items-center gap-5">
      {allData.map((data, index) => (
        <div className="flex flex-col font-overpass" key={index}>
          <Link to={`/${data.id}`}>
            <HoverImg data={data} />
          </Link>
            <div className="my-8 ">
              <h1 className="text-2xl font-semibold">{data.id}</h1>
              <h2 className="text-2xl font-medium text-gray-400">{data.price}</h2>
            </div>
        </div>
      ))}
    </div>
  )
}

export default AllProducts