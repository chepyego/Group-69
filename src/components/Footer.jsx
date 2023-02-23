import MobilePlaystore from './MobilePlaystore';
import React from 'react'
const Logo = require("../images/Group 9.png");


function Footer() {
  return (
    <div className='primary-back'>
        <ul className='flex justify-center pt-28 '>
            <div className='md:mr-16 mr-2'>
              <img  src={Logo} alt="logo"/>
        
            </div>
            <div>
                <ul className='md:mr-48 mr-2'>
                    <li className='text-3xl md:text-4xl primary-text-color mb-8'>Company</li>
                    <li className='text-2xl secondary-text-color font-medium mb-4'>Features</li>
                    <li className='text-2xl mb-4 secondary-text-color font-medium'>About us</li>
                    <li className='text-2xl mb-4 secondary-text-color font-medium'>Contact us</li>
                    <li className='text-2xl secondary-text-color font-medium'>Blog</li>

                </ul>

            </div>
            <div>
                <ul>
                    <li className='text-3xl md:text-4xl primary-text-color mb-8'>Legal</li>
                    <li className='text-2xl secondary-text-color font-medium mb-4'>Terms and Conditions</li>
                    <li className='text-2xl secondary-text-color mb-4'>Privacy Policy</li>
                    <li className='text-2xl secondary-text-color'>Responsible Disclosure</li>
                </ul>

            </div>
        </ul>
        <div className='flex justify-center align-top md:pb-28 pb-96  mt-8 ml-20'>
          <MobilePlaystore/>

        </div>
      
    </div>
  )
}

export default Footer
