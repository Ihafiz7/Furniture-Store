import { Suspense, lazy } from "react"
import Loading from "./components/Loading"
const About = lazy(() => import('./components/About'))
const Blog = lazy(() => import('./components/Blog'))
const BuyGuide = lazy(() => import('./components/BuyGuide'))
const Footer = lazy(() => import('./components/Footer'))
const Header = lazy(() => import('./components/Header'))
const Hero = lazy(() => import('./components/Hero'))
const LatestArival = lazy(() => import('./components/LatestArival'))
const Newsletter = lazy(() => import('./components/Newsletter'))
const Other = lazy(() => import('./components/Other'))
const Range = lazy(() => import('./components/Range'))


const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <Hero />
      <LatestArival />
      <About />
      <Range />
      <BuyGuide />
      <Blog />
      <Newsletter />
      <Other />
      <Footer />
    </Suspense>
  )
}

export default Home