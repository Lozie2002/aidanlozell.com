import React from "react";
import ProjectCard from "../components/Project/ProjectCard";
import logo1 from "../photos/logo.png";

function Project() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-black flex flex-col items-center justify-center relative overflow-hidden px-10 py-8">
      <h1 className="text-4xl text-white mb-6">My Projects</h1>
      <div className="z-20 flex items-start justify-start gap-6 flex-wrap mt-6">
        <ProjectCard
          name={"React Profolio Website"}
          image={logo1}
          about={"A personal portfolio website built with React, showcasing various projects and skills."}
          demo={"https://blog-website-riteshk-007.vercel.app/"}
          code={"https://github.com/riteshk-007/blog-website"}
          tags={["React", "CSS", "JavaScript"]}
        />
        <ProjectCard
          name={"LushExteriorCleaning.com"}
          image={logo1}
          about={"A platform for exterior cleaning services, featuring an image gallery and service details."}
          demo={"https://imagzen.vercel.app/"}
          code={"https://github.com/riteshk-007/imagzen"}
          tags={["React", "Firebase", "CSS"]}
        />
        <ProjectCard
          name={"LearningForLifeDrivingSchool.com"}
          image={logo1}
          about={"An e-commerce site for driving school services, integrating booking and payment functionalities."}
          demo={"https://nextjs-e-commerce-rk.vercel.app/"}
          code={"https://github.com/riteshk-007/nextjs-store"}
          tags={["Next.js", "Redux", "JavaScript"]}
        />
        <ProjectCard
          name={"Java Based Games"}
          image={logo1}
          about={"A collection of engaging games developed in Java, providing fun and entertainment."}
          code={"https://github.com/riteshk-007/Chat-GPT-Clone"}
          tags={["Java", "Games", "OpenAI"]}
        />
        <ProjectCard
          name={"App Development"}
          image={logo1}
          about={"A versatile web application for managing workout routines, progress tracking, and performance analytics."}
          demo={"https://gym-exercise-six.vercel.app/"}
          code={"https://github.com/riteshk-007/gym-exercise"}
          tags={["React", "Express", "MongoDB"]}
        />
        <ProjectCard
          name={"Arcade Machine"}
          image={logo1}
          about={"An online arcade platform where users can play classic games and share their scores with friends."}
          demo={"https://youtube-clone-by-ritesh.netlify.app/"}
          code={"https://github.com/riteshk-007/Youtube-Clone-by-Tailwind-Css"}
          tags={["React", "Node.js", "CSS"]}
        />
      </div>
    </div>
  );
}

export default Project;
