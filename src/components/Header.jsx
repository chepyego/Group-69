
import '../styles/Header.css'
import {MdArrowDropDown} from 'react-icons/md'
import {Link} from 'react-router-dom'
import propTypes from 'prop-types'
import React from 'react'

export default function Header() {
  return (
     <nav className='navbar bg-gray-100 shadow-lg py-4 w-screen'>
      <div class="container mx-auto">
         <ul className='flex items-center gap-x-6'>
          <li className='tracking-wide font-sans text-xl mr-96 ml-20'>
            <Link to='/'><span className='text-4xl font-bold'>W</span>ise <span className='font-bold text-4xl'>L</span>edger</Link>
          </li>
          <li>
            <Link to='' className='font-bold font-sans text-neutral-700'>Features 
            </Link>
          </li>
          <li>
            <Link to='' className='font-bold font-sans text-neutral-700'>About</Link>
          </li>
          <li>
            <Link to='/blog' className='font-bold font-sans text-neutral-700 '>Blog</Link>
          </li>
          <li className=' py-2.5 px-8 nav-button text-white  ml-20 rounded-lg'>
            <Link to=''>Get App</Link>
          </li>
         </ul>
         
      </div>
       
     </nav>
  )
}
