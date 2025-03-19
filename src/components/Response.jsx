import React, { useState } from "react";
import emailjs from "emailjs-com";

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
        "abhayabikramshahiofficial@gmail.com" // Replace with your EmailJS User ID
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
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Send me a message. Let's have a chat!
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="from_name">
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
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="from_email">
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
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="message">
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
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Response;
