

import React from 'react'
const PersonOperating = require("../images/Operation.png");


function HowWiseLegerHelp() {
  return (
    <div>
        <div className='primary-back mt-24'>
            <h6 className='text-4xl font-semibold nav-text text-red   mx-56 mb-20 font-sans'>The Easiest way to manage your business finances from your phone</h6>

            <div>
                <div className='flex justify-center gap-5 mx-12'>
                    <img src={PersonOperating} alt="automated sales image"/>
                     <div>
                        <h6 className='text-4xl primary-text-color font-semibold font-sans'>Automated Sales Management</h6>
                        <p className='text-2xl font-semibold secondary-text-color w-96 font-sans mt-6'>Sales management with WiseLedger is very easy. In a few clicks, you can record sales, check out sales history and get up-to-date inventory record. Suitable for both online and offline businesses.</p>
                        <button className='mt-6 nav-button rounded-lg text-white py-2.5 px-10'>Get started</button>

                     </div>
                </div>
                <div className='flex justify-center align-center mx-20 gap-5'>
                  <div className='mt-52'>
                    <h6 className='text-4xl primary-text-color mb-6'>Seamless Invoicing</h6>
                    <p className='  secondary-text-color text-2xl'>Avoid bad debt, get paid on time. Create, customise and send invoice in a click. WiseLedger is here to make it happen.</p>
                    <button className='mt-6  mb-44 nav-button rounded-lg text-white py-2.5 px-10'>Get started</button>

                  </div>

                  <div className='mt-52'>
                    <h6 className='text-4xl primary-text-color mb-6'>Business growth made easy</h6>
                    <p className='   secondary-text-color text-2xl'>Get a clear record of your business peformance in a glance to help measure your business growth. Get free access to a consultant once every month..</p>
                    <button className='mt-6 mb-44 nav-button rounded-lg text-white py-2.5 px-10'>Get started</button>

                  </div>


                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default HowWiseLegerHelp
