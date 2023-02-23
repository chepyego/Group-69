import {  useState } from 'react'
import React from 'react'

export default function AboutWiseLeger() {
  const [showMore, setShowMore] = useState(false)
    // const[items, setItems] = useState([
    //   {id: 1, showMore: false},
    //   {id: 2, showMore: false},
    //   {id: 3, showMore: false},
    //   {id: 4, showMore: false},

      
    // ]);
    

  const moreClick = (id) =>{
    setShowMore(!showMore);
    // const updatedItems = items.map((item) =>
    // item.id ===id ? {...item, showMore: !item.showMore}: item);
     
    // setItems(updatedItems)

  };
  

  return (
    <div>
      <div>
        <div className='leading-loose md:leading-none text-center md:text-4xl text-2xl font-semibold nav-text md:mt-36 md:mb-11 mb-6 mt-12'>What you can do with wise Ledger</div>

          <div className='md:ml-48 md:mr-40 ml-0 mr-0  block  md:flex justify-center flex-wrap p-8 md:p-0 md:gap-2 gap-y-5'>
            <div className=' hover:bg-gray-100 shadow-2xl bg-white rounded-2xl w-96 max-w-fit  max-h-fit md:mx-auto  md:mb-28 mb-6'>
              <h6 className='mb-2 md:mb-0 leading-loose text-lg md:text-3xl font-medium md:font-semibold nav-text pt-6 md:pl-4 pl-14'>Simplified Acounting</h6>
              <p className='md:pb-0 pb-8 m-4 justify-center align-center text-base font-normal text-blue-600/75 font-Inter '>Managing your account is easier than before with WiseLedger. Record your sales and expenses in a few easy steps.{""}
               {showMore &&  (
                <>
                With WiseLedger your business accounting and bookkeeping processes are automated leadingto reduction in data entry errors and inaccuracy in financial records.You can now focus on growing your business and reduce time and resources spent on manualaccounting and bookkeeping.{""}

                </>

               )}

              <button onClick={moreClick} className=' ml-14 md:ml-0 my-4 nav-button rounded-lg text-white py-2.5 px-8 '>{showMore ? "Read less": "Learn More"}
              </button>
             </p> 
            </div>
            <div className='hover:bg-gray-100 shadow-2xl bg-white rounded-2xl w-96 max-w-fit max-h-fit mx-auto md:mb-28 mb-6'>
              <h6 className='text-lg md:text-3xl font-semibold nav-text pt-6 md:pl-4 pl-14'>Up- To-Date Inventory</h6>
              <p className=' m-4 justify-center align-center text-base font-normal text-blue-600/75 font-Inter'>Get up-to the minute update in your inventory with our effective inentory management system.{" "}
                {showMore && (
                  <>
                    You can automate inventory management tasks with a few clicks, from complexorder fulfillment, stock control and inventory records.{""}

                  </>

                )}<br></br>

                <button onClick={ moreClick} className='ml-14 md:ml-0 my-4 nav-button rounded-lg text-white py-2.5 px-8'>{showMore ? "Read less": "Learn More"}
                </button>

              
              
              </p>
            </div>
            <div className='hover:bg-gray-100 shadow-2xl bg-white rounded-2xl w-96 max-w-fit  h-64 mx-auto md:mb-28 mb-6'>
              <h6 className=' text-lg md:text-3xl font-semibold nav-text pt-6 md:pl-4 pl-10'>Seamless Account Intergration</h6>
              <p className=' m-4 justify-center align-center text-base font-normal text-blue-600/75 font-Inter'>Get your account integrated in just few clicks..</p>
              <button className='ml-14 md:ml-4 nav-button rounded-lg text-white py-2.5 px-8'>Learn More</button>
            </div>
            <div className=' hover:bg-gray-100 shadow-2xl bg-white rounded-2xl w-96 max-w-fit h-64 mx-auto md:mb-28 mb-6'>
              <h6 className='text-lg md:text-3xl font-semibold nav-text pt-6 md:pl-4 pl-10'>Book a section with consuitant</h6>
              <p className=' m-4 justify-center align-center text-base font-normal text-blue-600/75 font-Inter'>Book a free consultation with our experts and get free tips on how to improve sales..</p>
              <button className='ml-14 md:ml-4 nav-button rounded-lg text-white py-2.5 px-8'>Learn More</button>
            </div>

          </div>
        </div>  

          
      </div>
          
  )
}
