import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-gray-900 text-2xl font-extrabold">My App</h1>
        <div className="space-x-6">
          <Link to="/" className="text-gray-900 hover:text-gray-600 transition duration-300">
            Home
          </Link>
          <Link to="/response" className="text-gray-900 hover:text-gray-600 transition duration-300">
            Response
          </Link>
          <Link to="/about" className="text-gray-900 hover:text-gray-600 transition duration-300">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
