import { Link } from 'react-router-dom';
import MobilePlaystore from './MobilePlaystore';
import React from 'react'
const Logo = require("../images/Group 9.png");


function Footer() {
  return (
    <div className='primary-back'>
        <ul className='flex justify-center pt-28 '>
            <div className=' md:mr-16 mr-2'>
              <Link to='/'><img  src={Logo} alt="logo"/></Link>
        
            </div>
            <div>
                <ul className='md:mr-48 mr-2'>
                    <li className='text-3xl md:text-4xl primary-text-color mb-8 hover:border-b-2 hover:border-blue-700'>Company</li>
                    <li className='text-2xl secondary-text-color font-medium mb-4 hover:border-b-2 hover:border-blue-700'><Link to ="features">Features</Link></li>
                    <li className='text-2xl mb-4 secondary-text-color font-medium hover:border-b-2 hover:border-blue-700'><Link to='/about'>About us</Link></li>
                    <li className='text-2xl mb-4 secondary-text-color font-medium hover:border-b-2 hover:border-blue-700'><Link to='/contact_us'>Contact us</Link></li>
                    <li className='text-2xl secondary-text-color font-medium hover:border-b-2 hover:border-blue-700'>Blog</li>

                </ul>

            </div>
            <div>
                <ul>
                    <li className='text-3xl md:text-4xl primary-text-color mb-8'>Legal</li>
                    <li className='text-2xl secondary-text-color font-medium mb-4 hover:border-b-2 hover:border-blue-700'>Terms and Conditions</li>
                    <li className='text-2xl secondary-text-color mb-4 hover:border-b-2 hover:border-blue-700'>Privacy Policy</li>
                    <li className='text-2xl secondary-text-color hover:border-b-2 hover:border-blue-700'>Responsible Disclosure</li>
                </ul>

            </div>
        </ul>
        <div className=' flex-1 flex justify-center align-top md:pb-28 pb-20  mt-8 md:ml-20 ml-0'>
          <MobilePlaystore/>

        </div>
      
    </div>
  )
}

export default Footer
