import {FcGoogle} from 'react-icons/fc'
import {AiFillApple} from 'react-icons/ai'
import React from 'react'
// import Phone from 'images/Phone.jpg'

export default function Home() {
  return (
    <div className='flex justify-between top-section nav-text pt-20 px-56'>
      <div><span className='text-4xl font-bold'>Book Keeping</span><br/> 
           <span className='text-4xl font-bold'>Made Easy.</span><br/>
            <span className='font-semibold text-3xl'>An easy way to keep your<br/>
             business finances on track</span>
             <div className='flex gap-2 mt-2'>

                <button className='bg-black px-4 py-4 rounded-lg text-white  '>
                  {<AiFillApple/>}Download on app<br/>
                  App store

                </button>
                <button className='bg-black px-4 py-4 rounded-lg text-white'>
                  {<FcGoogle/>}GET IT ON<br/>
                  Google play

                </button>
             </div>
             
      </div>
       
      
      <img src="../images/Phone.jpg" alt="home pictures" />
    </div>
  )
}
