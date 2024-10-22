import React, { useState } from "react";
import aidanTradeShow from "../../photos/aidanTradeShow.jpg"; // Adjust the path based on your folder structure

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-black flex flex-col lg:flex-row items-center justify-center relative overflow-hidden p-2"> {/* Reduced padding */}
      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-center lg:items-center my-2 lg:gap-10"> {/* Reduced margins */}
        <h1 className="text-teal-400 text-3xl lg:text-4xl my-3 text-center"> {/* Adjusted margin */}
          CONTACT ME
        </h1>
        <form className="w-full lg:w-3/4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-gray-300 font-semibold" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 mt-2 rounded bg-gray-700 text-gray-300 border border-teal-400"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-300 font-semibold" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 mt-2 rounded bg-gray-700 text-gray-300 border border-teal-400"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-300 font-semibold" htmlFor="message">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-2 mt-2 rounded bg-gray-700 text-gray-300 border border-teal-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-5">
        <img
          src={aidanTradeShow} // Use the imported image
          alt="Aidan Lozell"
          className="w-full h-auto max-w-lg lg:max-w-xl rounded-lg shadow-2xl border-4 border-teal-400"
        />
      </div>
    </div>
  );
}

export default ContactForm;
