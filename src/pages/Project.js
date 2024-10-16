import React from "react";
import ProjectCard from "../components/Project/ProjectCard";
import logo1 from "../photos/logo.png";

function Project() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-black flex flex-col items-center justify-center relative overflow-hidden px-10 py-8">
      <h1 className="text-4xl text-white mb-6">My Projects</h1>
      <div className="z-20 flex items-start justify-start gap-6 flex-wrap mt-6">
        <ProjectCard
          name={"Blog Website"}
          image={logo1}
          about={"A responsive blogging platform built with Next.js and Tailwind CSS, allowing users to create, edit, and delete posts."}
          demo={"https://blog-website-riteshk-007.vercel.app/"}
          code={"https://github.com/riteshk-007/blog-website"}
          tags={["Next.js", "Tailwind CSS", "JavaScript"]}
        />
        <ProjectCard
          name={"Imagzen"}
          image={logo1}
          about={"An image gallery app built with React and Firebase, allowing users to upload and manage their photo galleries."}
          demo={"https://imagzen.vercel.app/"}
          code={"https://github.com/riteshk-007/imagzen"}
          tags={["React", "Firebase", "CSS"]}
        />
        <ProjectCard
          name={"E-commerce Store"}
          image={logo1}
          about={"A fully functional e-commerce website created with Next.js and Redux, featuring a secure payment gateway."}
          demo={"https://nextjs-e-commerce-rk.vercel.app/"}
          code={"https://github.com/riteshk-007/nextjs-store"}
          tags={["Next.js", "Redux", "JavaScript"]}
        />
        <ProjectCard
          name={"Chat GPT Clone"}
          image={logo1}
          about={"A chatbot application utilizing OpenAI's GPT-3 model for real-time conversations."}
          code={"https://github.com/riteshk-007/Chat-GPT-Clone"}
          tags={["Python", "Flask", "OpenAI"]}
        />
        <ProjectCard
          name={"Gym Exercise Tracker"}
          image={logo1}
          about={"A web app to track workouts and monitor progress, built with React and Express."}
          demo={"https://gym-exercise-six.vercel.app/"}
          code={"https://github.com/riteshk-007/gym-exercise"}
          tags={["React", "Express", "MongoDB"]}
        />
        <ProjectCard
          name={"YouTube Clone"}
          image={logo1}
          about={"A video sharing platform built with React and Node.js, allowing users to upload and comment on videos."}
          demo={"https://youtube-clone-by-ritesh.netlify.app/"}
          code={"https://github.com/riteshk-007/Youtube-Clone-by-Tailwind-Css"}
          tags={["React", "Node.js", "CSS"]}
        />
      </div>
    </div>
  );
}

export default Project;
