import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function FormForProduct() {
  // const[formData, setFormData] = useState([]);
  const [imageUrl,  setImageUrl] = useState('')
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('')
  const [message, setMessage] = useState('')

  

    // const handleChange = (event) =>{
    //   setFormData({
    //     ...formData,[event.target.name]: event.target.value
    //   });
    // };
    const handleSubmit =(e) =>{
      e.preventDefault();
      fetch('https://wise-ledger-hosted.fly.dev/api/v1/products',{
        method:'POST',
        headers:{
          'content-Type': 'application/json'
        },
        body: JSON.stringify({
          imageUrl: imageUrl,
          title: title,
          price: price,
          
        })
      })
      .then(response =>{
        if(response.ok){
          setImageUrl("");
          setTitle("");
          setPrice("");
          setMessage("Product created succesfully");
        }else{
          setMessage("Some errors Occured")
        }
      }) 
      .catch(error => {
        console.log(error);
      });
        
            
    };
  return (
    <div className='primary-back'>
      <h1 className='text-center pt-4 font-bold primary-text-color text-2xl'>Create New Products Inventory</h1>
        <div className='pt-12  w-full max-w-sm  flex justify-center align-center mx-auto'>
        <form  className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'onSubmit={handleSubmit}>
            <label className='text-sm font-bold text-gray-700 mb-4'>
                Image_url:
                <input className='shadow apperance-none border rounded w-full py-3 px-3 text-gray-700 mb-2' type="text" name="image_url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}></input>
            </label><br></br>
            <label className='text-sm font-bold text-gray-700 mb-4'>
                title:
                <input className='shadow apperance-none border rounded w-full py-3 px-3 text-gray-700 mb-2' type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            </label><br></br>
            <label className='text-sm font-bold text-gray-700 mb-4'>
                Price:
                <input className='shadow apperance-none border rounded w-full py-3 px-3 text-gray-700 mb-2' type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)}></input>
            </label><br></br>
            <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg' type="submit">Submit</button>
            <div className='text-green-400 text-sm'>{message ? <p>{message}</p>: null}</div>
        </form>
      
    </div>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-8  py-4 rounded-lg absolute top-28 right-4'><Link to='/products_show'>View Inventory</Link></button>

    </div>
    
  )
}

export default FormForProduct
