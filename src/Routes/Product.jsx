import { useState } from "react";
import Header from "../components/Header";
import allData from "../data/allData"
import { useParams } from "react-router-dom";

const Product = ({cart ,setCart, quantity, setQuantity}) => {
    const { productId } = useParams();
    const data = allData.find(item => item.id === productId);

    if (!data) {
        return <div>Product not found</div>;
    }
    const baseUrl = '/';
    const img1Url = baseUrl + data.img1;
    const img2Url = baseUrl  + data.img2;
    const [imgToShow, setImgToShow] = useState(img1Url);

    const addToCart = () => {

        console.log("Adding to cart:", data.id, "Quantity:", quantity);
        const existingItemIndex = cart.findIndex(item => item.id === data.id);
        console.log(cart);
    
        if (existingItemIndex !== -1) {
          const updatedCart = [...cart];
          updatedCart[existingItemIndex].quantity += quantity;
          setCart(updatedCart);
        } else {
          setCart([...cart, { ...data, quantity }]);
        }
        setQuantity(1);
      };

  return (
    <div>
       <div className="mb-12">
            <Header />
       </div>
        <div key={data.id} className="flex items-center xl:flex-row sm:flex-col justify-center w-full h-auto px-12 mb-10">
            <div className="flex flex-col xl:w-1/2 sm:w-full gap-4">
                <h1 className="text-4xl font-medium tracking-wider text-center my-4 sm:flex xl:hidden">{data.id}</h1>
                <h3 className="text-4xl font-medium tracking-wider text-center mb-4 sm:flex xl:hidden text-red-500"> {data.price} </h3>
                <img src={imgToShow} alt={data.id} className=" w-[650px] h-[500px] object-cover" />
                <div className="flex items-center gap-8">
                    <img src={img1Url} alt={data.id} onClick={() => setImgToShow(img1Url)} className=" w-[300px] h-[200px] object-cover"/>
                    <img src={img2Url} alt={data.id} onClick={() => setImgToShow(img2Url)} className=" w-[300px] h-[200px] object-cover"/>
                </div>
            </div>
            <div className="flex flex-col items-start justify-between sm:w-full xl:w-1/2 font-overpass sm:mt-8 xl:mt-0">
                <h1 className="text-4xl font-medium tracking-wider my-4 sm:hidden xl:flex">{data.id}</h1>
                <h3 className="text-4xl font-medium tracking-wider mb-4 sm:hidden xl:flex text-red-500"> {data.price} </h3>
                <p className="text-2xl font-normal sm:w-full xl:w-3/4 h-auto text-gray-400 mb-4">{data.des}</p>
                <div className="bar sm:w-full xl:w-3/4"></div>
                <h4 className="my-4 text-xl font-semibold">Materials <h5 className=" font-light text-lg">{data.materials}</h5></h4>
                <div className="bar sm:w-full xl:w-3/4"></div>
                <h4 className="my-4 text-xl font-semibold">Delivery Information <h5 className=" font-light text-lg">Here is some important information regarding delivery.</h5></h4>
                <div className="bar sm:w-full xl:w-3/4"></div>
                <h4 className="flex items-center justify-between sm:w-full xl:w-3/4 my-4 text-xl font-semibold">Weight<h5 className=" font-light text-lg">{data.weight}</h5></h4>
                <h4 className="flex items-center justify-between sm:w-full xl:w-3/4 my-4 text-xl font-semibold">Dimentions<h5 className=" font-light text-lg">{data.dimentions}</h5></h4>
                <h4 className="flex items-center justify-between sm:w-full xl:w-3/4 my-4 text-xl font-semibold">Country<h5 className=" font-light text-lg">{data.origin}</h5></h4>
                <div className="bar sm:w-full xl:w-3/4"></div>
                <div className="flex items-center gap-4 sm:w-full xl:w-3/4 my-8">
                    <input type="number" min='0' placeholder="0" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} className=" focus:outline-none border border-gray-400 w-1/6 h-14 rounded-md text-center text-3xl" />
                    <button onClick={addToCart} className="sm:w-full xl:w-3/4 p-4 bg-[#090e1d] text-white text-2xl rounded-md hover:opacity-80 hover: transition-all ">ADD TO CART</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product