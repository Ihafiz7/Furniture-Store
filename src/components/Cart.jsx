import React from 'react'
import { Link } from 'react-router-dom';

const Cart = ({cart, setCart}) => {
    const updateQuantity = (itemId, newQuantity) => {
        const updatedCart = cart.map(item => {
          if (item.id === itemId) {
            return { ...item, quantity: newQuantity };
          }
          return item;
        });
        setCart(updatedCart);
    };

    const removeFromCart = (itemId) => {
        const updatedCart = cart.filter(item => item.id !== itemId);
        setCart(updatedCart);
    };

  return (
     <div className='flex flex-col items-center justify-center gap-8 font-overpass'>
      <h1 className='text-3xl font-semibold tracking-wide mt-10'>Your Cart</h1>
      {cart.length === 0 ? (
        <div className='flex items-center justify-center flex-col gap-8 w-3/4'>
            <p className='text-xl font-medium'>Your cart is empty.</p>
            <button className="my-10 sm:w-full xl:w-3/4 p-4 bg-[#090e1d] text-white text-2xl rounded-md hover:opacity-80 hover: transition-all "><Link to="/all">Go to Store</Link></button>
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center'>
          {cart.map(item => (
            <div key={item.id}>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-between w-3/4 gap-8'>
                        <img src={item.img1} alt="Item" className='w-28 h-28 object-cover' />
                        <div>
                            <h1 className='text-3xl font-semibold'>{item.id}</h1>
                            <h2 className='text-xl font-semibold'>{item.price}</h2>
                            <input type="number" min='1' value={item.quantity} onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))} className=" focus:outline-none border border-gray-400 w-2/6 h-14 rounded-md text-center text-3xl" />
                        </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="my-10 sm:w-full xl:w-3/4 p-4 bg-[#090e1d] text-white text-2xl rounded-md hover:opacity-80 hover: transition-all ">Remove from cart</button>
                    <h1 className='text-xl font-medium'>SubTotal: ${parseFloat(item.price.replace(/[^\d.]/g, '')) * item.quantity} USD</h1>
                    <div className='bar'></div>
                </div>
            </div>
          ))}
          <button className="my-10 sm:w-full xl:w-3/4 p-4 bg-[#090e1d] text-white text-2xl rounded-md hover:opacity-80 hover: transition-all ">Continue to Checkout</button>
          <button className="sm:w-full xl:w-3/4 p-4 bg-[#090e1d] text-white text-2xl rounded-md hover:opacity-80 hover: transition-all "> <Link to='/all'>Continue Shopping</Link> </button>
        </div>
      )}
    </div>
  )
}

export default Cart