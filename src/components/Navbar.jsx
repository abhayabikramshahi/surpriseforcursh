import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/30 backdrop-blur-md p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-gray-900 text-3xl font-extrabold tracking-wide">Surpisee</h1>
        
        {/* Hamburger Button */}
        <button 
          className="md:hidden text-gray-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Nav Links */}
        <div className={`md:flex md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-white/50 backdrop-blur-lg shadow-md md:shadow-none p-5 md:p-0 transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
          <Link to="/" className="block md:inline-block text-gray-900 font-medium hover:text-gray-600 transition duration-300 px-4 py-2">
            Home
          </Link>
          <Link to="/about" className="block md:inline-block text-gray-900 font-medium hover:text-gray-600 transition duration-300 px-4 py-2">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
