
import {GrPrevious} from 'react-icons/gr'
import {GrNext} from 'react-icons/gr'

import React from 'react'
const happyCustomer = require("../images/Ellipse 5.png");
const happyCustomerTwo = require("../images/Ellipse 6.png");



export default function CustomersView() {
  return (
    <div>
        <div>
            <h6 className='primary-text-color text-4xl font-semibold text-center mt-36'>What our users are saying</h6>
             <div className='overflow-x-scroll flex-1 md:flex mx-20 mt-16'>
                <div>
                    <p className='secondary-text-color text-xl'>I came across WiseLedger at the right time whenI had issues balancing my ledger. With WiseLedger,my business finance management has gotten better.</p>
                    <div className='relative'>
                      <div className='absolute top-12 text-lg font-bold'><GrPrevious/></div>
                     <img className='mt-32 ml-28' src={happyCustomer} alt= 'happy customer'/>
                     <span className='primary-text-color text-center md:text-2xl text-xl font-semibold md:flex justify-center mt-2'>Chioma- Oma Caterings</span>

                    </div>
                    
                </div>
                <div>
                  <div className='relative ml-8'>
                     <span className='absolute top-72 left-3/4'><GrNext/></span>
                    <p className='secondary-text-color text-xl'>As a small business owner, I could barely keep track of my income and expenses. My business finances were messed up, I couldn’t separate my profit from capital but since I started recording sales on WiseLedger, I have been able to effectively managemy finanaces..</p>
                    <img className="mt-32 mx-auto"src={happyCustomerTwo} alt= 'happy customer'/>
                     <span className='mt-12 primary-text-color md:mr-36 md:text-2xl text-xm font-semibold flex justify-end'>Irene- Irene Special Beddings</span>
                  </div>
                    
                </div>

             </div>
        </div>
      
    </div>
  )
}
