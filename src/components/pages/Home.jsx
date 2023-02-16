import React from 'react'
// import Phone from 'images/Phone.jpg'

export default function Home() {
  return (
    <div className='flex justify-between top-section nav-text pt-20 px-56'>
      <div><span className='text-4xl font-bold'>Book Keeping</span><br/> 
           <span className='text-4xl font-bold'>Made Easy</span><br/>
            <span className='font-semibold text-3xl'>An easy way to keep your<br/>
             business finances on track</span>
             <button className='bg-black px-4 py-4 rounded-lg text-white '>
              Download on app<br/>
              App store

       </button>
      </div>
       
      
      <img src="../images/Phone.jpg" alt="home pictures" />
    </div>
  )
}
