import React from "react";
import iAccelerate from "../../photos/iAccelerate.jpg";
import IGA from "../../photos/IGA.png";
import Woolooware from "../../photos/woolooware.png";
import Wollongong from "../../photos/wollongong.png";

function WorkAndEducation() {
  return (
    <div className="p-8 bg-gradient-to-r from-blue-900 to-black flex flex-col">
      {/* Work Experience Section */}
      <div className="pr-4">
        <h2 className="text-4xl font-bold mb-6 text-teal-400">WORK EXPERIENCE</h2>

        {/* iAccelerate Internship */}
        <div className="mb-8 flex items-start">
          <div className="w-1/5 text-gray-500"> {/* Date on the left */}
            Feb 2024 - Nov 2024
          </div>
          <div className="w-4/5 pr-6"> {/* Removed max-w-md to allow wider text */}
            <h3 className="text-2xl font-bold text-teal-400">iAccelerate Sample Assist Internship</h3>
            <h4 className="text-xl text-gray-300">INTELITEC SOLUTIONS</h4>
            <p className="text-gray-300 mt-2">
              Throughout my final year at university, I worked as part of a dynamic team at iAccelerate on a comprehensive research project aimed at migrating systems from Google Firebase to Amazon Web Services (AWS). Our work primarily focused on evaluating the strengths and weaknesses of both platforms, identifying technical requirements, and implementing strategies to ensure a seamless migration. Additionally, we developed a DORA (DevOps Research and Assessment) metric system to monitor and optimize the performance of the migration process.

              As part of the project, I also contributed to building a dashboard application using React, which integrated GitHub and AWS data to display key performance indicators. This dashboard featured real-time metrics, such as deployment frequency, lead time for changes, and time to restore service, providing clear insights into development productivity and operational stability. By utilizing GitHub and AWS APIs, we were able to create a user-friendly interface that allowed for effective tracking of both development and infrastructure performance. This experience honed my skills in full-stack development, cloud technologies, and data visualization.
            </p>
            <img 
              src={iAccelerate} 
              alt="iAccelerate Sample Assist" 
              className="w-1/3 h-auto rounded-lg shadow-2xl mt-4"
            />
          </div>
        </div>

        {/* Ritchies IGA Liquor */}
        <div className="mb-8 flex items-start">
          <div className="w-1/5 text-gray-500"> {/* Date on the left */}
            2021 - Current
          </div>
          <div className="w-4/5 pr-6"> {/* Removed max-w-md to allow wider text */}
            <h3 className="text-2xl font-bold text-teal-400">Ritchies IGA Liquor Taren Point</h3>
            <h4 className="text-xl text-gray-300">Assistant Liquor Manager</h4>
            <p className="text-gray-300 mt-2">
              As the Assistant Liquor Manager, I am responsible for overseeing the day-to-day operations of the liquor department. This included managing stock, ensuring optimal stock levels through regular inventory checks, and placing orders to maintain adequate supply. I am also in charge of organizing the workflow for staff, providing guidance and support to ensure efficient customer service and adherence to store policies. Additionally, I handle direct communication with suppliers to negotiate and order stock, while also engaging with customers to address inquiries, provide product recommendations, and resolve any issues that arose. My role requires strong organizational skills, attention to detail, and the ability to manage multiple tasks while maintaining high standards of service and inventory accuracy.
            </p>
            <img 
              src={IGA} 
              alt="Ritchies IGA Liquor Taren Point" 
              className="w-1/3 h-auto rounded-lg shadow-2xl mt-4"
            />
          </div>
        </div>

        {/* Ritchies IGA Supervisor */}
        <div className="mb-8 flex items-start">
          <div className="w-1/5 text-gray-500"> {/* Date on the left */}
            2017 - 2021
          </div>
          <div className="w-4/5 pr-6"> {/* Removed max-w-md to allow wider text */}
            <h3 className="text-2xl font-bold text-teal-400">Ritchies IGA Taren Point</h3>
            <h4 className="text-xl text-gray-300">Supervisor / Cigarette Controller</h4>
            <p className="text-gray-300 mt-2">
              In this role, I was responsible for managing the store's cigarette section, ensuring compliance with regulations, and maintaining stock levels. Additionally, as a Service Supervisor, I oversaw customer service operations, ensuring a smooth and efficient experience for all customers while assisting with daily store management tasks.
            </p>
            <img 
              src={IGA} 
              alt="Ritchies IGA Liquor Taren Point" 
              className="w-1/3 h-auto rounded-lg shadow-2xl mt-4"
            />
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="pl-4">
        <h2 className="text-4xl font-bold mb-6 text-teal-400">EDUCATION</h2>

        {/* University of Wollongong */}
        <div className="mb-8 flex items-start">
          <div className="w-1/5 text-gray-500"> {/* Date on the left */}
            2020 - Nov 2024
          </div>
          <div className="w-4/5"> {/* Removed max-w-md to allow wider text */}
            <h3 className="text-2xl font-bold text-teal-400">University of Wollongong</h3>
            <h4 className="text-xl text-gray-300">Bachelor of Computer Science (Cybersecurity)</h4>
            <p className="text-gray-300 mt-2">
              I completed a Bachelor of Computer Science, majoring in Cybersecurity, where I gained a strong foundation in the principles of computing, software development, and system architecture. Throughout my studies, I developed an in-depth understanding of cybersecurity practices, including network security, encryption techniques, threat analysis, and incident response.

              My coursework focused on both the theoretical and practical aspects of securing computer systems, including hands-on labs and projects involving real-world scenarios like ethical hacking, penetration testing, and secure software development. I also learned how to identify vulnerabilities, assess security risks, and implement defensive measures to protect networks and applications from cyber threats.

              In addition to core subjects like algorithms, data structures, and operating systems, I took specialized courses in areas such as cryptography, firewall configurations, and cloud security. This education has prepared me to tackle a wide range of cybersecurity challenges in today's digital landscape and equipped me with the tools to contribute effectively to securing sensitive data and systems in various industries.
            </p>
            <img 
              src={Wollongong} 
              alt="University of Wollongong" 
              className="w-1/6 h-auto rounded-lg shadow-2xl mt-4"
            />
          </div>
        </div>

        {/* Woolooware High School */}
        <div className="mb-8 flex items-start">
          <div className="w-1/5 text-gray-500"> {/* Date on the left */}
            2014 - 2019
          </div>
          <div className="w-4/5"> {/* Removed max-w-md to allow wider text */}
            <h3 className="text-2xl font-bold text-teal-400">Woolooware High School</h3>
            <h4 className="text-xl text-gray-300">Year 12 Graduate</h4>
            <p className="text-gray-300 mt-2">
            I completed my Year 12 education at Woolooware High School, where I developed a solid foundation in various subjects, particularly technology, mathematics, and problem-solving. My time in high school was marked by a growing passion for computing and analytical thinking, which laid the groundwork for my pursuit of a degree in Computer Science.

In my senior years, I excelled in subjects like Information and Software Technology, Mathematics Extension, and Physics. These courses provided me with a deep understanding of logical reasoning, algorithmic thinking, and quantitative analysis. I also participated in extracurricular activities, such as coding competitions and STEM-related projects, which fostered a collaborative and innovative mindset.

The combination of my academic achievements and extracurricular involvement helped me cultivate critical skills in technology, from programming basics to tackling complex mathematical problems. This experience sparked my interest in cybersecurity and computing, motivating me to further my education in these fields at the university level.            </p>
            <img 
              src={Woolooware} 
              alt="Woolooware High School" 
              className="w-1/6 h-auto rounded-lg shadow-2xl mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkAndEducation;
