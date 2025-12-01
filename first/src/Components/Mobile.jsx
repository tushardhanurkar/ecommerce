import React, { useState } from 'react'
import { sammobiledata } from '../Data/MobileData'
import sm from '../assets/sm.png';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";             
import { CartContext } from '../context/Cartcontxt.jsx';
import Footer from './Footer'; 


                                                         
  

const Mobile = () => {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);


  return (
    <div>
      <div>

      <img src={sm} className="w-full h-80 object-fill" />

      <div>

      <div className="flex flex-row h-20 justify-center items-center bg-[#fc2b58]">
        <h1 className="text-xl sm:text-2xl font-bold text-white">Best Selling Smartphone</h1>
      </div>

      <div className='flex flex-row items-center justify-center'>
        <input 
          type='text' 
          placeholder='Search Here'
          className='mt-5 border-2 rounded-full p-2 w-85 sm:w-96 md:w-1/3'
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
      </div>

      <div className='flex justify-center items-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full sm:w-300 p-5 m-10'>

          {sammobiledata.filter((item)=>
            item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          
            )
            .length===0 && search!==''?
            (
                    <div className="text-red-500 mt-5 h-100">Results don't match</div>

            ):(
             sammobiledata
        .filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )

      )

        
            .map((items,index)=>(
              
              <div className='border border-gray-300 rounded-xl m-5 p-5 shadow-sm' key={index}>
                <img src={items.image} className="w-full h-40 object-contain"/>
                <h1 className="font-semibold mt-2">{items.name}</h1>
                <h3 className="text-sm text-gray-600">{items.specs}</h3>
                <h2 className="text-blue-600 font-bold text-lg mt-1">{items.price}</h2>

                <div className='flex justify-around'>
                  <button className='bg-blue-500 p-2 rounded-lg mt-2 text-white cursor-pointer text-sm sm:text-base'
                 onClick={() => navigate(`/buy/${items.id}`)} >  Buy Now
                  </button>
                 <button 
  className='bg-blue-500 p-2 rounded-lg text-white cursor-pointer'
  onClick={() => addToCart(items)}
>
  Add to Cart
</button>

                </div>

              </div>
          ))}
        </div>
      </div>
      </div>
      </div>
      <Footer />
</div>

    
  )
}

export default Mobile
