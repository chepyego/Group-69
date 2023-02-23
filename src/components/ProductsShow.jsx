import { useState, useEffect } from 'react'

import React from 'react'

function ProductsShow() {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('https://wise-ledger-hosted.fly.dev/api/v1/products')
        .then(response => response.json())
        .then (json => setData(json))
        .catch(error => console.log(error));
    },[])


  return (
    <div>
        <h1>Products</h1>
        {data.map(product =>(
            <li key={product.id}>

              <img className="w-1/2"src={product.image_url}/>
              {product.title}
            {product.price}
            </li>

        ))}
      
    </div>
  )
}

export default ProductsShow
