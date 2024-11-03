import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>
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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
