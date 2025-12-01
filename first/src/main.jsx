/* @jsxImportSource react */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from "@chakra-ui/react";
import './index.css' 
import { BrowserRouter } from 'react-router-dom';
import 'flowbite';
import { CartProvider } from './context/Cartcontxt.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <CartProvider>
      <App />
      </CartProvider>
  </React.StrictMode>
  </BrowserRouter>
);
