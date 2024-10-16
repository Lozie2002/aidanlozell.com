import React from "react";
import iAccelerate from "../../photos/iAccelerate.jpg";
import IGA from "../../photos/IGA.png"; // Import the second image
import Woolooware from "../../photos/woolooware.png"; // Import the third image
import Wollongong from "../../photos/wollongong.png"; // Import the fourth image

function WorkAndEducation() {
  return (
    <div className="p-8 bg-gradient-to-r from-blue-900 to-black flex flex-col md:flex-row"> {/* Gradient background and flex layout */}
      {/* Work Experience Section */}
      <div className="md:w-1/2 pr-4"> {/* Adjust width for the work experience section */}
        <h2 className="text-4xl font-bold mb-6 text-teal-400">WORK EXPERIENCE</h2> {/* Teal for main heading */}

        {/* iAccelerate Internship */}
        <div className="mb-8 flex flex-col md:flex-row items-start">
          <div className="md:w-2/3 pr-6 max-w-md">
         
            <h3 className="text-2xl font-bold text-teal-400">iAccelerate Sample Assist Internship</h3>
            <h4 className="text-xl text-gray-300">INTELITEC SOLUTIONS</h4>
            <p className="text-gray-300 mt-2">
              Throughout my final year at university, I have been working as part of 
              a team at iAccelerate on a research project focused on migrating 
              systems from Google Firebase to Amazon Web Services (AWS). This 
              task has involved extensive analysis of both platforms' capabilities, 
              evaluating the technical requirements for migration, and developing 
              strategies to ensure a smooth transition. Our team has also been responsible 
              for identifying potential challenges and creating solutions to mitigate risks 
              during the migration process. This experience has enhanced my skills in cloud 
              computing, project management, and collaborative problem-solving, and has 
              provided me with a deeper understanding of the complexities involved in cloud 
              service migration.
            </p>
            <span className="text-gray-500">2024</span>
            <img 
            src={iAccelerate} 
            alt="iAccelerate Sample Assist" 
            className="w-1/3 h-auto rounded-lg shadow-2xl"
          />
          </div>
          
        </div>

        {/* Ritchies IGA Liquor */}
        <div className="mb-8 flex flex-col md:flex-row items-start">
          <div className="md:w-2/3 pr-6 max-w-md">
          
            <h3 className="text-2xl font-bold text-teal-400">Ritchies IGA Liquor Taren Point</h3>
            <h4 className="text-xl text-gray-300">Assistant Liquor Manager</h4>
            <p className="text-gray-300 mt-2">
              I have been a member of the Ritchies team for over 6 years, with my 
              most recent role in the store's liquor department. Operating as a 
              separate entity from the store, this department requires many 
              functions and tasks to operate daily. As the most senior casual 
              member, I undertake a managerial position in the absence of my 
              manager, demanding a range of roles and skills.
            </p>
            <span className="text-gray-500">2021 - Current</span>
            <img 
            src={IGA} 
            alt="Ritchies IGA Liquor Taren Point" 
            className="w-1/3 h-auto rounded-lg shadow-2xl"
          />
          </div>
         
        </div>

        {/* Ritchies IGA Supervisor */}
        <div className="mb-8 flex flex-col md:flex-row items-start">
     
          <div className="md:w-2/3 pr-6 max-w-md">
          
            <h3 className="text-2xl font-bold text-teal-400">Ritchies IGA Taren Point</h3>
            <h4 className="text-xl text-gray-300">Supervisor / Cigarette Controller</h4>
            <p className="text-gray-300 mt-2">
              In this role, I was responsible for managing the store's cigarette section, ensuring compliance with regulations, and maintaining stock levels.
            </p>
            <span className="text-gray-500">July 2010 - December 2011</span>
            <img 
            src={IGA} 
            alt="Ritchies IGA Liquor Taren Point" 
            className="w-1/3 h-auto rounded-lg shadow-2xl"
          />
          </div>
         
        </div>
      </div>

      {/* Education Section */}
      <div className="md:w-1/2 pl-4"> {/* Adjust width for the education section */}
        <h2 className="text-4xl font-bold mb-6 text-teal-400">EDUCATION</h2> {/* Teal for heading */}

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-teal-400">University of Wollongong</h3>
          <h4 className="text-xl text-gray-300">Bachelor of Computer Science (Major: Cybersecurity)</h4>
          <p className="text-gray-300 mt-2">
            Throughout my final year at university, I have been working as part of a team at iAccelerate on a research project focused on migrating systems from Google Firebase to Amazon Web Services (AWS). This task has involved extensive analysis of both platforms' capabilities, evaluating the technical requirements for migration, and developing strategies to ensure a smooth transition. Our team has also been responsible for identifying potential challenges and creating solutions to mitigate risks during the migration process. This experience has enhanced my skills in cloud computing, project management, and collaborative problem-solving, and has provided me with a deeper understanding of the complexities involved in cloud service migration.
          </p>
          <span className="text-gray-500">March 2013 - Present</span>
          <img 
            src={Wollongong} 
            alt="University of Wollongong" 
            className="w-1/6 h-auto rounded-lg shadow-2xl mt-4" // Added margin for spacing
          />
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-teal-400">Woolooware High School</h3>
          <h4 className="text-xl text-gray-300">Year 12 Graduate</h4>
          <p className="text-gray-300 mt-2">
            I completed my Year 12 education, where I developed a strong foundation in various subjects, particularly in technology and mathematics. This experience sparked my interest in pursuing a career in computer science and cybersecurity.
          </p>
          <span className="text-gray-500">December 2011 - March 2013</span>
          <img 
            src={Woolooware} 
            alt="Woolooware High School" 
            className="w-1/6 h-auto rounded-lg shadow-2xl mt-4" // Added margin for spacing
          />
        </div>
      </div>
    </div>
  );
}

export default WorkAndEducation;
