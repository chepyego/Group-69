import {AiOutlinePlus} from 'react-icons/ai'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'

function ProductsShow() {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('https://wise-ledger-hosted.fly.dev/sales')
        .then(response => response.json())
        .then (json => setData(json))
        .catch(error => console.log(error));

        
    },[])
    const handleDelete = (id) =>{
      fetch(`https://wise-ledger-hosted.fly.dev/sales${id}`, {
        method: 'DELETE',
      })
      .then(response => response.json())
      .then(data => {
        // delete item
        // setData(items.filter((item) => item.id !== id));
        setData(prevData => prevData.filter(sale => sale.id !== id));

      })
      .catch(error => console.log(error));

      
    }

  
  return (
    <div>
        <h1 className='text-center font-bold text-2xl primary-text-color py-8'>Sales Recordings</h1>
        <p className='text-center text-base primary-text-color mb-4'>Page loading....</p>
        <div className=' relative overflow-x-auto shadow-md sm:rounded-lg'>
          <table className=' w-full text-sm text-left text-gray-500 table-auto  '>
            <tr className='bg-gray-50 dark:bg-gray-400 dark:text-gray-400 text-sm uppercase'>
              <th className='px-3 py-6'>Date</th>
              <th scope="col"className='px-6 py-3 '>Total Amount(Ksh)</th>
              <th className='py-3 px-6'>Received(Ksh)</th>
              <th className=''>Balance due(Ksh)</th>
              <th>Actions</th>
            </tr>
            {data.map(sale =>(
              
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 font-medium dark:text-white whitespace-nowrap' key={sale.id}>
                {/* <td><img className=" py-3 px-6 w-24 h-20"src={product.image_url}/></td> */}
                <td className='py-3 px-6'>{sale.date}</td>
                <td className='font-medium'>{sale.total_amount}</td>
                <td className='py-3 px-6'>{sale.received}</td>
                <td>{sale.balance_due}</td>
              <td>
                <button onClick={() => handleDelete(sale.id)} className="py-3 text-white hover:bg-red-800 px-2 bg-red-500 mt-2">Delete</button>
              </td>
              </tr>

          ))}

            
          </table>
      </div>
        
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-8  py-4 rounded-lg absolute top-28 right-4'><Link to='/form_for_product'><AiOutlinePlus/></Link></button>

      
    </div>
  )
}

export default ProductsShow
