import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react'
import '../styles/Header.css'
import {MdArrowDropDown} from 'react-icons/md'
import {Link} from 'react-router-dom'
import propTypes from 'prop-types'
import React from 'react'
const Logo = require("../images/Group 9.png");

export default function Header() {
  const  [isOpen , setIsOpen] = useState(false);

  const toggleNav = () =>{
    setIsOpen(!isOpen);
  }

  return (
     <nav className='navbar bg-gray-100 shadow-lg  w-screen relative py-6'>
      <div class="container mx-auto">
        <button type="button" className=' absolute right-1 text-2xl md:invisible'>
         <GiHamburgerMenu />

        </button>
         <img  className="absolute bottom-0"src={Logo} alt="logo" />

         <ul className='flex justify-end align-center gap-x-6 '>
          <li>
            <Link to='/features' className='font-bold font-sans nav-text hover:bg-blue-700'>Features 
            </Link>
          </li>
          <li>
            <Link to='/about' className='font-bold font-sans nav-text hover:underline-gray'>About</Link>
          </li>
          <li>
            <Link to='/blog' className='font-bold font-sans nav-text  '>Blog</Link>
          </li>
          <li className=' font-sans font-bold py-2.5 px-8 nav-button text-white  rounded-lg'>
            <Link to=''>Get App</Link>
          </li>
         </ul>
         
      </div>
       
     </nav>
  )
}
Header.defaultProps = {

}