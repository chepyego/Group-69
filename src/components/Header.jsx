
import {Link} from 'react-router-dom'
import propTypes from 'prop-types'
import React from 'react'

export default function Header() {
  return (
     <nav className='navbar bg-gray-100 shadow-lg py-8'>
      <div class="container mx-auto">
         <ul className='flex'>
          <li className='tracking-wide font-sans text-xl mr-96'>
            <Link to='/'><span className='text-4xl font-bold'>W</span>ise <span className='font-bold text-4xl'>L</span>edger</Link>
          </li>
          <li>
            <Link to=''>Features</Link>
          </li>
          <li>
            <Link to=''>About</Link>
          </li>
          <li>
            <Link to=''>Blog</Link>
          </li>
          <li>
            <Link to=''>Get App</Link>
          </li>
         </ul>
         
      </div>
       
     </nav>
  )
}
