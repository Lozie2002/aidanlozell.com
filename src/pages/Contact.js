import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import aidanTradeShow from '../photos/aidanTradeShow.jpg';

function ContactForm() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'AidanLozellWebsite',       // Service ID
      'template_0cal4ap',      // Template ID
      form.current,
      'KwssoqJjAbQ4m6GrF'      // User ID
    )
    .then((result) => {
        console.log(result.text);
        setStatusMessage('Message sent successfully!');
        form.current.reset(); // Clear the form fields
      }, (error) => {
        console.log(error.text);
        setStatusMessage('Failed to send message, please try again later.');
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-customColor to-blue-200 p-6">
      <div className="flex flex-col w-full max-w-lg md:max-w-xl lg:max-w-2xl bg-white p-8 rounded-xl shadow-xl transition-transform transform hover:scale-105">
        
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Contact Me</h2>
        {statusMessage && (
          <p className="text-center text-sm text-green-500 mb-4">{statusMessage}</p>
        )}
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-150"
            />
          </div>

          <div>
            <label htmlFor="user_email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-150"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-150"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150"
          >
            Send
          </button>
        </form>

        {/* Image below the form */}
        <div className="flex justify-center items-center mt-8">
  <img
    src={aidanTradeShow}
    alt="Aidan Lozell"
    className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 rounded-lg shadow-2xl" // Increased width for larger screens
  />
</div>

      </div>
    </div>
  );
}

export default ContactForm;
