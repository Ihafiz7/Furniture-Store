import { Routes, Route } from 'react-router-dom';
import { Suspense,lazy,useState } from 'react';
const Home = lazy(() =>import('./Home'))
const All = lazy(() => import('./Routes/All'))
const Sale = lazy (() => import('./Routes/Sale'))
const Living = lazy(() => import('./Routes/Living'))
const Dining = lazy(() => import('./Routes/Dining'))
const Bedroom = lazy (() => import('./Routes/Bedroom'))
const Product = lazy(() => import('./Routes/Product'))
const Loading = lazy(() => import('./components/Loading'))
const Cart = lazy(() => import('./components/Cart'))

const App = () => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:productId" element={<Product cart={cart} setCart={setCart} quantity={quantity} setQuantity={setQuantity} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='/all' element = {<All />} />
        <Route path='/sale' element = {<Sale />} />
        <Route path='/living' element = {<Living />} />
        <Route path='/dining' element = {<Dining />} />
        <Route path='/bedroom' element = {<Bedroom />} />
        
      </Routes>
    </Suspense>
  )
}

export default App
