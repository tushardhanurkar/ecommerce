import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import Mobile from './Components/Mobile'
import Laptop from './Components/Laptop'
import TV from './Components/TV'
import Cart from './Components/Cart'
import Buynowpage from './Components/Buynowpage'
import Signup from './Signup'
import Login from './Login'
import Checkout from './Checkout'
import AOS from "aos";
import { easeInOut } from 'framer-motion'


const App = () => {

  useEffect(()=>{

    AOS.init({

      duration:1000,
      once:true,
      easing:"ease-in-out"
    },[])
  })
  return (
    <>
      <Navbar />
<div className="pt-[70px] md:pt-[140px]">
      <Routes>                                       
        <Route path="/" element={<Home />} />        
        <Route path="/mobile" element={<Mobile/>} /> 
        <Route path="/laptop" element={<Laptop/>} /> 
        <Route path="/tv" element={<TV/>} />         
        <Route path="/login" element={<Login />} />  
   <Route path="/checkout" element={<Checkout />}/>  
        <Route path="/signup" element={<Signup />} />
<Route path="/buy/:id" element={<Buynowpage />} />   

        <Route path="/cart" element={<Cart />} />    


      </Routes> 
      </div>
    </>
  )
}

export default App
