
import {Link} from 'react-router-dom'
import React from 'react'
const Logo = require("../images/Group 9.png");


function Footer() {
  return (
    <div className='primary-back'>
        <ul className='flex justify-center py-28'>
            <div className='mr-16'>
              <img  src={Logo} alt="logo"/>
        
            </div>
            <div>
                <ul className='mr-48'>
                    <li className='text-4xl primary-text-color mb-8'>Company</li>
                    <li className='text-2xl secondary-text-color font-medium mb-4'>Features</li>
                    <li className='text-2xl mb-4 secondary-text-color font-medium'>About us</li>
                    <li className='text-2xl secondary-text-color font-medium'>Blog</li>

                </ul>

            </div>
            <div>
                <ul>
                    <li className='text-4xl primary-text-color mb-8'>Legal</li>
                    <li className='text-2xl secondary-text-color font-medium mb-4'>Terms and Conditions</li>
                    <li className='text-2xl secondary-text-color mb-4'>Privacy Policy</li>
                    <li className='text-2xl secondary-text-color'>Responsible Disclosure</li>
                </ul>

            </div>
        </ul>
      
    </div>
  )
}

export default Footer
