import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react'
import '../styles/Header.css'
import {Link} from 'react-router-dom'
import React from 'react'
const Logo = require("../images/Group 9.png");

export default function Header() {
  const  [isOpen , setIsOpen] = useState(false);

  const toggleNav = () =>{
    setIsOpen(!isOpen);
  }

  return (
     <nav className='navbar bg-gray-100 shadow-lg  w-screen relative md:py-6 py-0'>
      <div className="container mx-auto">
        <button type="button" className=' absolute top-14 right-6 text-2xl md:invisible 'onClick={toggleNav}>
         <GiHamburgerMenu />

        </button>
           <Link to='/'><img  className=" md:absolute bottom-0  "src={Logo} alt="logo" /></Link>
         <div className={isOpen? 'visible md:invisible': 'md:visible invisible'}>
            <ul className='  my-auto md:my-0 md:flex justify-end align-center md:gap-x-6  '>
              <li>
                <Link to='/features' className='font-bold font-sans nav-text hover:border-b-2 hover:border-blue-700'>Features 
                </Link>
              </li>
              <li>
                <Link to='/about' className='font-bold font-sans nav-text hover:border-b-2 hover:border-blue-700 '>About</Link>
              </li>
              <li>
                <Link to='/contact_us' className='font-bold font-sans nav-text hover:border-b-2 hover:border-blue-700 '>Contact us</Link>
              </li>
              <li>
                <Link to='/blog' className='font-bold font-sans nav-text hover:border-b-2 hover:border-blue-700 '>Blog</Link>
              </li>
              <li className='max-w-fit max-h-fit font-sans font-bold md:py-2.5 md:px-8  nav-button text-white  rounded-lg hover:bg-blue-600 '>
                <Link to=''>SIGN UP/ LOGIN</Link>
              </li>
            </ul>


         </div>

         
         
      </div>
       
     </nav>
  )
}
Header.defaultProps = {

}