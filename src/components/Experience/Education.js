import React from "react";

function WorkExperience() {
  return (
    <div className="p-8 bg-gradient-to-r from-blue-900 to-black">
      <h2 className="text-4xl font-bold mb-6 text-teal-400">EDUCATION</h2> {/* Teal for heading */}

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-teal-400">University of Wollongong</h3> {/* Teal for job title */}
        <h4 className="text-xl text-gray-300">Balancelor of Computer Science (Major Cybersecurity)</h4> {/* Light grey for company name */}
        <p className="text-gray-300 mt-2">
          Throughout my final year at university, I have been working as part of a team at iAccelerate on a research project focused on migrating systems from Google Firebase to Amazon Web Services (AWS). This task has involved extensive analysis of both platforms' capabilities, evaluating the technical requirements for migration, and developing strategies to ensure a smooth transition.
          Our team has also been responsible for identifying potential challenges and creating solutions to mitigate risks during the migration process. This experience has enhanced my skills in cloud computing, project management, and collaborative problem-solving, and has provided me with a deeper understanding of the complexities involved in cloud service migration.
        </p>
        <span className="text-gray-500">March 2013 - Present</span>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-teal-400">Wolooware High School</h3> {/* Teal for job title */}
        <h4 className="text-xl text-gray-300">Year 12 Graduate</h4> {/* Light grey for company name */}
        <p className="text-gray-300 mt-2">

        </p>
        <span className="text-gray-500">December 2011 - March 2013</span>
      </div>

      
    </div>
  );
}

export default WorkExperience;
