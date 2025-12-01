import React, { useState, useEffect } from "react";
import imgg1 from '../assets/imgg1.png';
import imgg2 from '../assets/imgg2.png';
import imgg3 from '../assets/imgg3.png';

const images = [
  imgg1,
  imgg2,
  imgg3
];

const Slider = () => {
  const [current, setCurrent] = useState(0);                                        

  // Auto Slide — Runs every 3s
  useEffect(() => {
    const timer = setInterval(() => {     
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));          
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (

    <div className="w-full h-[500px] relative overflow-hidden">

  <div
    className="flex transition-transform duration-700 ease-out h-full"
    style={{ transform: `translateX(-${current * 100}%)` }}
  >
    {images.map((img, i) => (
      <img
        key={i}
        src={img}
        className="w-full h-full object-fill"
      />
    ))}
  </div>



      {/* Left Arrow */}
      <button
        onClick={prevSlide}       
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-3">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all
              ${current === index ? "bg-white" : "bg-white/50"}
            `}
          ></div>
        ))}
      </div>
      
    </div>
  );
};

export default Slider;
