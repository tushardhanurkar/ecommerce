import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>      
               
      <div     
        className="flex flex-row justify-between items-center p-5"    
        style={{ 
        background: "linear-gradient(90deg, #38bdf8, #d97706)",       
        }}
        >                    
        <h1 className="text-2xl font-bold text-black tracking-wide">
        ElectroMart
        </h1>      

        <p className="ml-auto text-lg text-black font-medium hidden md:block">
          Empowering Lifestyles, Electrifying Choices!
        </p>

       <button
          className="md:hidden text-black text-3xl ml-4"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      <nav className="bg-[#fc2b58]">
        <ul
          className={`flex flex-col md:flex-row md:gap-6 gap-4 p-4
            ${open ? "block" : "hidden"} md:flex`}
        >
          <Link className="text-white font-semibold" to="/">Home</Link>
          <Link className="text-white font-semibold" to="/mobile">Mobiles</Link>
          <Link className="text-white font-semibold" to="/laptop">Laptops</Link>
          <Link className="text-white font-semibold" to="/tv">Home Appliances</Link>
          <Link className="text-white font-semibold" to="/cart">Cart</Link>

          <Link        
            to="/login"  
            className="bg-green-400 px-4 py-2 rounded-lg text-white w-fit"
          >      
            Login
          </Link>

          <Link  
            to="/signup"
            className="bg-green-400 px-4 py-2 rounded-lg text-white w-fit"
          >       
            Signup
          </Link> 
        </ul>
      </nav> 
    </div>   
  );
};            

export default Navbar;
