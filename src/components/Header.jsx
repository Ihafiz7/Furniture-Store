import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    const [hamburger, setHamburger] = useState(false);
    const [menu, SetMenu] = useState(false);

    useEffect(() => {
        const checkWidth = () => {
            const md = window.innerWidth > 768 ;
            setHamburger(md);
        }
        checkWidth();
        window.addEventListener('resize', checkWidth);

        return () => {
            window.removeEventListener('resize', checkWidth)
        };
    })

    const handleClick = () => {
        SetMenu((p) => !p)
    }
    
  return (
    <div className='flex flex-col justify-center w-full'>
        <nav className='flex items-center justify-between px-5 py-2'>
                <Link to='/'>
                    <img src="images/vosco.svg" alt="Vosco Logo" className='w-40 h-20 object-contain cursor-pointer' />
                </Link>
            
            {hamburger && (
                <ul className='flex items-center gap-4 font-overpass font-semibold text-xl cursor-pointer'>
                    <li>Blog</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Terms & Conditions</li>
                </ul>
            )}
            <ul className='flex items-center gap-4'>
                <li> <img src="images/search.svg" alt="Icon Search" className='w-10 h-10 cursor-pointer' /></li>
                <li> <Link to='/cart'><img src="images/cart.svg" alt="Cart Icon" className='w-10 h-10 cursor-pointer' /></Link> </li>
                {!hamburger && (
                <img src="images/hamburger.svg" onClick={handleClick} alt="Menu" className='w-10 h-10 cursor-pointer' />
                )}
            </ul>
            
        </nav>
        {!menu && (
            <nav>
                <ul className='flex items-center justify-center sm:gap-4 xl:gap-8 font-overpass sm:text-xl xl:text-2xl text-gray-400 cursor-pointer sm:pl-0 xl:pl-12'>
                    <li><Link to='/all'>All</Link></li>
                    <li><Link to='/sale'>Sale</Link></li>
                    <li><Link to='/dining'>Dining</Link></li>
                    <li><Link to='/living'>Living</Link></li>
                    <li><Link to='/bedroom'>Bedroom</Link></li>
                </ul>
            </nav>
        )} 
    </div>
  )
}

export default Header