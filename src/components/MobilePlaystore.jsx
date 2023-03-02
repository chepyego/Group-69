
import {FaGooglePlay} from 'react-icons/fa'
import {AiFillApple} from 'react-icons/ai'
import React from 'react'

export default function MobilePlaystore() {
  return (
    <div>

        <button className='bg-black px-5 py-2 rounded-lg text-white  relative  mr-8 hover:bg-gray-700'>
          <span className='absolute left-0 bottom-2 text-4xl'>{<AiFillApple/>}</span><span className='text-sm'>Download on app</span><br/>
          App store

        </button>
        <button className='bg-black px-6 py-2 rounded-lg text-white relative ml-2 hover:bg-gray-700'>
        <span className='absolute left-0.5 bottom-5'>{<FaGooglePlay/>}</span><span className='text-sm'>GET IT ON</span><br/>
         Google play
        </button>
      
    </div>
  )
}
