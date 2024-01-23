import React from 'react'

const Navbar = () => {
    const navItems = [
        {link: "Home", path: "home"},
        {link: "Albums", path: "albums"},
        {link: "Register", path: "register"},
        {link: "Login", path: "login"}
      ]
  return (
    <nav>
        <div>
           <h1 className='font-bold text-primary text-2xl flex'>Practise</h1> 
           <ul>
            {
              navItems.map(({link, path}) => <a key={link} href={path}>{link}</a>)
            }
           </ul>
        </div>
        
        
    </nav>
  )
}

export default Navbar