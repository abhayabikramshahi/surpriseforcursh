import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"; 

function Response() {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true); 

 
    const templateParams = {
      from_name: formData.name,
      to_name: "Abhaya Bikram Shahi",
      message: formData.message,
      user_email: "abhayabikramshahiofficial@gmail.com", 
    };

    emailjs
      .send(
        "service_ub05xn4",
        "template_525y5dq", 
        templateParams,
        "ckaqH_94gsQYavFKU" 
      )
      .then(
        () => {
          setIsSent(true); 
          setIsLoading(false);
          setFormData({ name: "", message: "" });
        },
        (error) => {
          console.error("Email sending failed:", error);
          setIsLoading(false);
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <h1 className="text-3xl font-bold mb-4">Don't leave me</h1>
      <h2 className="text-xl text-gray-700 mb-6">I knew ittt</h2>


      <motion.form
        onSubmit={sendEmail}
        className="bg-white bg-opacity-80 backdrop-blur-md p-6 rounded-lg shadow-xl w-full max-w-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >

        <div className="mb-4">
          <label className="block text-gray-800 font-semibold mb-1">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-pink-500"
            placeholder="Enter your name"
          />
        </div>


        <div className="mb-4">
          <label className="block text-gray-800 font-semibold mb-1">Your Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-pink-500"
            placeholder="Write your message..."
            rows="3"
          />
        </div>

        <motion.button
          type="submit"
          disabled={isLoading || isSent}
          className={`w-full py-3 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 ${
            isSent
              ? "bg-green-500 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-500"
          }`}
          whileTap={{ scale: 0.95 }}
          animate={isSent ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] } : {}}
        >
          {isLoading ? "📩 Sending..." : isSent ? "💌 Sent Successfully!" : "Send Message 💖"}
        </motion.button>
      </motion.form>
    </div>
  );
}

export default Response;
