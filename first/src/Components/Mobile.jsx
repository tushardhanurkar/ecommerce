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
    <div className="w-full overflow-x-hidden">

      {/* Banner */}
      <img 
        src={sm} 
        className="w-full h-40 sm:h-64 md:h-80 object-fill" 
      />

      {/* Title */}
      <div className="flex h-16 sm:h-20 justify-center items-center bg-[#fc2b58]">
        <h1 className="text-lg sm:text-2xl font-bold text-white text-center px-2">
          Best Selling Smartphone
        </h1>
      </div>

      {/* Search */}
      <div className="flex justify-center px-4">
        <input 
          type="text" 
          placeholder="Search Here"
          className="
            mt-5 outline-2 outline-gray-200 rounded-full p-2
            w-full sm:w-96 md:w-1/3 
          "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Cards */}
      <div className="flex justify-center">
        <div aod className="
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          gap-4
          w-full
          max-w-7xl
          p-4 sm:p-6 
        ">

          {
            sammobiledata
              .filter(item =>
                item.name.toLowerCase().includes(search.toLowerCase())
              )
              .length === 0 && search !== '' ? (
                <div className="text-red-500 mt-5 col-span-full text-center">
                  Results don't match
                </div>
              ) : (
                sammobiledata
                  .filter(item =>
                    item.name.toLowerCase().includes(search.toLowerCase())
                  )
              )
              .map((items, index) => (
                <div
                  key={index}
                              data-aos="fade-left"

                  className="
                    border border-gray-300 rounded-xl
                    p-4 sm:p-5
                    shadow-sm
                  "
                >
                  <img 
                    src={items.image}
                    className="w-full h-36 sm:h-40 object-contain"
                  />

                  <h1 className="font-semibold mt-2 text-sm sm:text-base">
                    {items.name}
                  </h1>

                  <h3 className="text-xs sm:text-sm text-gray-600">
                    {items.specs}
                  </h3>

                  <h2 className="text-blue-600 font-bold text-base sm:text-lg mt-1">
                    {items.price}
                  </h2>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 justify-between mt-3">
                    <button
                      className="
                        bg-blue-500
                        px-3 py-2
                        rounded-lg
                        text-white
                        text-sm sm:text-base
                      "
                      onClick={() => navigate(`/buy/${items.id}`)}
                    >
                      Buy Now
                    </button>

                    <button
                      className="
                        bg-blue-500
                        px-3 py-2
                        rounded-lg
                        text-white
                        text-sm sm:text-base
                      "
                      onClick={() => addToCart(items)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))
          }
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Mobile;
