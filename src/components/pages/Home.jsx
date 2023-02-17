import AboutWiseLeger from '../AboutWiseLeger';
import {FaGooglePlay} from 'react-icons/fa'
import {AiFillApple} from 'react-icons/ai'
import React from 'react'
const bunner = require("../../images/Phone.jpg");

export default function Home() {
  return (
    <div className='bg-gray-100'>
      <div className='flex justify-between top-section nav-text pt-20 px-56'>
      <div>
        <div className='mt-20'>
            <span className='text-4xl font-bold'>Book Keeping</span><br/> 
            <span className='text-4xl font-bold'>Made Easy.</span><br/>
              <span className='font-semibold text-3xl'>An easy way to keep your<br/>
              business finances on track</span>
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
        
           <img className='mb-4'src={bunner} alt="phone pictures" />
        </div>
        <AboutWiseLeger/>
     
      
    </div>
    
  )
}
