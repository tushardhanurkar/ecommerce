import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "./Slider";
import gm from '../assets/gm.png';
import { mobileData } from "../Data/MobileData";
import { laptopData } from "../Data/LaptopData";
import Footer from "./Footer";
import { gamingData } from "../Data/Gaming";

const Home = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/buy/${id}`);
  };

  return (
    <div className="bg-[#f7f7f7] ">

      <Slider />

      {/* Section Header */}
      <div className="flex h-20 justify-center items-center bg-[#fc2b58]">
        <h1 className="text-xl md:text-2xl font-semibold text-white">Best Selling SmartPhones</h1>
      </div>

      {/* Smartphones */}
<div className="flex flex-row flex-wrap gap-8 m-10 mb-10 items-center justify-center">

        {mobileData.map((item) => (
          <div 
            key={item.id}
            className="rounded-xl p-4 shadow-lg bg-white w-72 hover:shadow-2xl transition-all duration-300"
          >
            <img src={item.image} alt={item.name} className="w-full h-72 object-contain" />
            <h2 className="text-lg font-semibold mt-3">{item.name}</h2>
            <p className="text-gray-600">{item.specs}</p>
            <p className="text-blue-600 font-bold mt-1">{item.price}</p>

            <button
              className="bg-blue-500 hover:bg-blue-700 transition-all duration-300 p-2 rounded-lg mt-3 text-white w-full"
              onClick={() => handleViewDetails(item.id)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      <div className="flex h-20 justify-center items-center bg-[#fc2b58] mt-10">
        <h1 className="text-xl md:text-2xl font-semibold text-white">Best Selling Laptops</h1>
      </div>

<div className="flex flex-row flex-wrap gap-8 m-10 mb-10 items-center justify-center">

        {laptopData.map((item) => (
          <div 
            key={item.id}
            className="rounded-xl p-4 shadow-lg bg-white w-72 hover:shadow-2xl transition-all duration-300"
          >
            <img src={item.image} alt={item.name} className="w-full h-72 object-contain" />
            <h2 className="text-lg font-semibold mt-3">{item.name}</h2>
            <p className="text-gray-600">{item.specs}</p>
            <p className="text-blue-600 font-bold mt-1">{item.price}</p>

            <button
              className="bg-blue-500 hover:bg-blue-700 transition-all duration-300 p-2 rounded-lg mt-3 text-white w-full"
              onClick={() => handleViewDetails(item.id)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      <img src={gm} className="w-full mt-10" />

      <div className="flex h-20 justify-center items-center bg-[#fc2b58] mt-10">
        <h1 className="text-xl md:text-2xl font-semibold text-white">Best Selling Home Appliances</h1>
      </div>

<div className="flex flex-row flex-wrap gap-8 m-10 mb-10 items-center justify-center">

        {gamingData.map((item) => (
          <div 
            key={item.id}
            className="rounded-xl p-4 shadow-lg bg-white w-72 hover:shadow-2xl transition-all duration-300"
          >
            <img src={item.image} alt={item.name} className="w-full h-72 object-contain" />
            <h2 className="text-lg font-semibold mt-3">{item.name}</h2>
            <p className="text-gray-600">{item.specs}</p>
            <p className="text-blue-600 font-bold mt-1">{item.price}</p>

            <button
              className="bg-blue-500 hover:bg-blue-700 transition-all duration-300 p-2 rounded-lg mt-3 text-white w-full"
              onClick={() => handleViewDetails(item.id)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

    <Footer />
    </div>
      
  );
};

export default Home;
