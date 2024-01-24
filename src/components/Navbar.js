import React, { useState } from 'react'
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
    const navItems = [
        {link: "Home", path: "home"},
        {link: "Albums", path: "albums"},
        {link: "Register", path: "register"},
        
      ]
  return (
    <nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary'>
        <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
          <div className='flex space-x-14 items-center'>
           <h1 className='font-bold text-primary text-2xl flex'>PRACT</h1> 
           <ul className='md:flex space-x-10'>
            {/* show links using map method. */}
            {
              navItems.map(({link, path}) => <a key={link} href={path} className='block 
              hover:text-gray-300'>{link}</a>)
            }
           </ul>
           </div> 
           {/* login */}
           <div className='space-x-12 hidden md:flex items-center'>
            <a href='/'><span>Language</span></a>
            <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'>login</button>

           </div>
           {/* menu btn, only display on mobile */}
           <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-white focus:outline-none
            focus:text-gray-300'>
              {
              isMenuOpen ? (<FaXmark className='w-8 h-6 text-primary'/>) : (<FaBars className='w-8 h-6 text-primary'/>)
              }

            </button>
           </div>


        </div>
        
        
    </nav>
  )
}

export default Navbar