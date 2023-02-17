
import {Link} from 'react-router-dom'
import React from 'react'

function Footer() {
  return (
    <div className='primary-back'>
        <ul className='flex pt-28'>
            <div>
            <li className='tracking-wide font-sans text-xl mr-96 ml-20 nav-text'>
              <Link to='/'><span className='text-4xl font-bold'>W</span>ise <span className='font-bold text-4xl'>L</span>edger</Link>
            </li>
        
            </div>
            <div>
                <ul className='mr-48'>
                    <li>Company</li>
                    <li>Features</li>
                    <li>About us</li>
                    <li>Blog</li>

                </ul>

            </div>
            <div>
                <ul>
                    <li>Legal</li>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Responsible Disclosure</li>
                </ul>

            </div>
        </ul>
      
    </div>
  )
}

export default Footer
