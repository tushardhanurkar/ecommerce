import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      
      {/* TOP BAR */}
<div className="flex flex-row justify-between items-center p-5 gradient-flow">
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

      {/* MENU */}
      <nav className="bg-[#fc2b58] relative">
 <ul
  className={`
    absolute left-0 top-full w-full bg-[#fc2b58]
    flex flex-col gap-4 p-4
    md:static md:flex-row md:w-full md:justify-center
    md:gap-8 md:py-3
    ${open ? "block" : "hidden"} md:flex
  `}
>

    <Link onClick={() => setOpen(false)} className="text-white md:text-2xl sm:text-xl font-semibold" to="/">Home</Link>
    <Link onClick={() => setOpen(false)} className="text-white md:text-2xl sm:text-xl font-semibold" to="/mobile">Mobiles</Link>
    <Link onClick={() => setOpen(false)} className="text-white md:text-2xl sm:text-xl font-semibold" to="/laptop">Laptops</Link>
    <Link onClick={() => setOpen(false)} className="text-white md:text-2xl sm:text-xl font-semibold" to="/tv">Home Appliances</Link>
    <Link onClick={() => setOpen(false)} className="text-white md:text-2xl sm:text-xl font-semibold" to="/cart">Cart</Link>

    <Link
      onClick={() => setOpen(false)}
      to="/login"
      className="bg-green-400 px-4 py-2 rounded-lg text-white w-22"
    >
      Login
    </Link>

    <Link
      onClick={() => setOpen(false)}
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
