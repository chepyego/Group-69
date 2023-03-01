import {FiPhoneCall} from 'react-icons/fi'
import { AiOutlineMail} from 'react-icons/ai'

import React from 'react'

export default function ContactUs() {
  return (
    <div>
        <h1 className='primary-text-color uppercase text-center py-8 text-2xl '>Contact us Today</h1>
        <div className=' ml-24 md:ml-0 flex-1 md:flex justify-center py-8 '>

          <div className='md:mr-36'>
            <button class='rounded-full bg-blue-800 px-8  text-white py-8 hover:bg-white border-black-800 hover: text-xl'><FiPhoneCall/></button>
            <div className='text-gray-700 font-sm text-xl mt-6'>call/text/WhatsApp</div> 
            <div className='text-gray-700 font-sm text-xl mt-2'>+254711210437</div>
            
          </div>
          <div className='mt-6 md:mt-0'>
            <button class='rounded-full bg-blue-800 px-8  text-white py-8 hover:bg-white border-black-800 hover: text-xl'><AiOutlineMail/></button>
            <div className='text-gray-700 font-sm text-xl mt-6'>Email us</div> 
            <div className='text-gray-700 font-sm text-xl pb-8 mt-2'>wiseleger@gmail.com</div>
            
          </div>
        </div>
         
      
    </div>
  )
}
