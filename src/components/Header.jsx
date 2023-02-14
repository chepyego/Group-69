import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import { BiQrScan } from 'react-icons/bi'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'


export default function Header() {
  return (
    <div className='flex justify-around space- items-start  bg-blue-600 py-2.5  text-white text-xl '>
        <AiFillHome/>
        <BiQrScan/>
        <BsFillChatDotsFill/>
        <CgProfile>profile</CgProfile>
        
      
    </div>
  )
}
