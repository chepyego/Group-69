import React, { useEffect, useState } from 'react'

import {AiFillPhone} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
function Consultants() {
    const [consultant, setConsultant] = useState([])

    useEffect(() =>{
        fetch('https://wise-ledger-hosted.fly.dev/consultants')
        .then(res =>res.json())
        .then(json => setConsultant(json))
        .catch(error => console.log(error));


    },[]);

    
  return (
    <div>
        <h1 className='text-2xl primary-text-color text-center font-semibold mt-14 '>Meet our consultants</h1>
        <h2 className='primary-text-color text-center'>Page loading......</h2>
         <div className='flex justify-center gap-x-8 mt-14 '>

         {consultant.map(person =>(
          
          <li  className="list-none secondary-text-color font-mono font-semibold text-base"key={person.id}>
            <img className="rounded-lg w-60 h-60 "src={person.image_url}/>
              <div>Name:{person.name}</div>
              <div><AiOutlineMail/> {person.email}</div>
              <div><span><AiFillPhone/></span>{person.phone}</div>

          </li>
      ))}
         </div>
        
      
    </div>
  )
}

export default Consultants
