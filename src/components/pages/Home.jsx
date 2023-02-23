import CustomersView from '../CustomersView';
import HowWiseLegerHelp from '../HowWiseLegerHelp';
import AboutWiseLeger from '../AboutWiseLeger';
import {FaGooglePlay} from 'react-icons/fa'
import {AiFillApple} from 'react-icons/ai'
import React from 'react'
const bunner = require("../../images/Phone.jpg");

export default function Home() {
  return (
    <div className='bg-gray-100'>
      <div className='  md:flex justify-between top-section nav-text pt-20 md:px-56'>
      <div>
        <div className='mt-20 ml-9 md:ml-0'>
            <span className='text-3xl md:text-4xl font-bold'>Accounting and<br></br> Book Keeping</span><br/> 
            <span className='text-3xl md:text-4xl font-bold'>Made Easy.</span><br/>
              <span className='font-semibold text-3xl '>Smart solution for <br/>
              your business needs </span>
              <div className='flex gap-2 mt-2'>
        </div>
        

                <button className='bg-black px-5 py-2 rounded-lg text-white  relative '>
                  <span className='absolute left-0 bottom-2 text-4xl'>{<AiFillApple/>}</span><span className='text-sm'>Download on app</span><br/>
                  App store

                </button>
                <button className='bg-black px-5 py-2 rounded-lg text-white relative ml-2'>
                  <span className='absolute left-0.5 bottom-5'>{<FaGooglePlay/>}</span><span className='text-sm'>GET IT ON</span><br/>
                  Google play

                </button>
             </div>
             
        </div>
        
           <img className='mb-4 md:visible invisible'src={bunner} alt="phone pictures" />
        </div>
        <AboutWiseLeger/>
        <div className='mt-24'><HowWiseLegerHelp/></div>
        <CustomersView/>
        
     
      
    </div>
    
  )
}
