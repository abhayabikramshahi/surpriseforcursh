import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const [noCount, setNoCount] = useState(0);

  const handleNoClick = () => {
    if (noCount < 4) {
      setNoCount(noCount + 1);
    }
  };

  return (
    <div className=" font-sans bg-white flex justify-center items-center text-center mt-[10px]">
      {/* Hero Section */}
      <div className="relative flex justify-center items-center bg-white">
        {/* Glassmorphism Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 p-10 bg-white bg-opacity-80 backdrop-blur-lg rounded-xl shadow-lg w-96"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-6" style={{ fontFamily: "Times New Roman, serif" }}>
            Do you love me?
          </h1>
          <div className="flex justify-center space-x-6">
            
            {/* Yes Button */}
            <motion.div 
              animate={{ scale: noCount >= 1 ? 1.1 : 1 }}
            >
              <Link
                to="/response"
                className="px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-lg shadow-lg hover:shadow-2xl hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300"
              >
                Yes
              </Link>
            </motion.div>

            {/* No Button */}
            <motion.button
              onClick={handleNoClick}
              initial={{ scale: 1 }}
              animate={{ 
                scale: [0.9, 0.8, 0.6, 0.4, 0.2, 0][noCount], 
                opacity: [1, 1, 1, 0.8, 0.5, 0][noCount] 
              }}
              transition={{ duration: 0.3 }}
              className="px-6 py-3 text-lg font-semibold text-white bg-red-600 rounded-lg shadow-lg hover:shadow-2xl hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300 transition-all duration-300"
            >
              No
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
