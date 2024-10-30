import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa"; // Import Instagram icon

function Introduction() {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=IGQWRQTm4zMWs1Q2gtbkNvdURnVFpSME4wc1A5T051RWE3UGVaSjg3S04wS051cVd3enc4VVBuY1ZAXTHJPcXBsTHd0MXZAQSDVhQzNwVTJraGZAPdUhQUGZAHbFVtbFN5TmVOcThiaWhGMjZAocnVoMkZA5NmRHaGVtUEEZD';

      try {
        const response = await fetch(url);
        const data = await response.json();
        setMedia(data.data); // Set media from fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white flex flex-col lg:flex-row items-start justify-center relative overflow-hidden p-4">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-center my-5 lg:gap-10">
        <h1 className="text-5xl lg:text-7xl font-extrabold text-customColor leading-tight">
          My Instagram Feed!
        </h1>
        
        {/* Media Section */}
        <div className="grid grid-cols-3 gap-4">
          {media.slice(0, 9).map(item => (
            <div key={item.id} className="relative m-2 p-2 rounded-lg shadow-lg bg-gray-100">
              <img
                src={item.media_url}
                alt={item.caption || "Instagram Media"} // Added meaningful alt text
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm text-center">
                  {item.caption || "No caption"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Follow Me Section */}
        <div className="mt-10 w-full">
          <p className="text-lg text-black font-semibold flex items-center">
            <FaInstagram className="text-2xl mr-2" /> {/* Instagram logo */}
            Follow me on Instagram: 
            <a 
              href="https://instagram.com/Aidan_lozell" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 underline ml-1 font-bold"
            >
              @Aidan_lozell
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
