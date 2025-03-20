import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const [noCount, setNoCount] = useState(0);
  const [message, setMessage] = useState("");

  const handleNoClick = () => {
    if (noCount < 4) {
      setNoCount(prevCount => prevCount + 1);
    } else {
      setMessage("Better luck next time!");
    }
  };

  return (
    <div className="font-sans bg-white flex justify-center items-center text-center mt-[10px]">
      <div className="relative flex justify-center items-center bg-white">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 p-10 bg-white bg-opacity-80 backdrop-blur-lg rounded-xl shadow-lg w-96"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-6" style={{ fontFamily: "Times New Roman, serif" }}>
            Do you love me?
          </h1>
          <div className="flex justify-center items-center space-x-6">
            <motion.div 
              animate={{ scale: noCount >= 1 ? 1.1 : 1 }}
            >
              <Link
                to="/response"
                className="px-6 py-3 text-lg font-semibold text-black border-2 border-black rounded-lg shadow-lg hover:shadow-2xl hover:bg-green-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300"
              >
                Yes
              </Link>
            </motion.div>

            <motion.button
              onClick={handleNoClick}
              initial={{ scale: 1 }}
              animate={{ opacity: [1, 1, 1, 0.8, 0.5, 0][noCount] }}
              transition={{ duration: 0.2 }} // Shorter transition duration for faster response
              className="px-6 py-3 text-lg font-semibold text-black border-2 border-black rounded-lg shadow-lg hover:shadow-2xl hover:bg-red-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 transition-all duration-300"
            >
              No
            </motion.button>
          </div>
          {message && <p className="mt-4 text-xl font-semibold text-gray-700">{message}</p>}
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
