import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Response = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ve5qksj", // Replace with your EmailJS Service ID
        "template_soatdte", // Replace with your EmailJS Template ID
        formData,
        { publicKey: "kw5FX4gr2J-25nyWH" } // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Something went wrong. Try again!");
        }
      );

    setFormData({ from_name: "", from_email: "", message: "" }); // Clear form
  };

  return (
    <div className=" flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full space-y-6 bg-white  p-8">
        {/* Title and message outside the form */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            Haha, I knew it
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Don't WORRY, I AM WITH YOU
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="from_name"
            >
              Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="Your name.."
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="from_email"
            >
              E-mail
            </label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              placeholder="Your email.."
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your message.."
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-3 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Response;
