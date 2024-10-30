import React from "react";
import ProjectCard from "../components/Project/ProjectCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import logo1 from "../photos/logo.png";

function Project() {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  const [projectRef, projectInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="bg-white flex flex-col items-center justify-center relative overflow-hidden px-10 py-8">
        <h1 className="text-5xl lg:text-7xl font-extrabold text-customColor leading-tight mb-4 text-left"> {/* Center header text */}
        My Projects
        </h1>

      {/* Paragraph under the h1 */}
      <p className="text-lg text-black mb-6 text-left max-w-3xl">
        Here is a selection of my projects that showcase my skills in web development. Each project demonstrates my ability to create responsive, user-friendly applications using modern technologies.
      </p>

      <div className="z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {[
          {
            name: "React Portfolio Website",
            image: logo1,
            about: "A personal portfolio website built with React, showcasing various projects and skills.",
            demo: "https://blog-website-riteshk-007.vercel.app/",
            code: "https://github.com/riteshk-007/blog-website",
            tags: ["React", "CSS", "JavaScript"],
          },
          {
            name: "LushExteriorCleaning.com",
            image: logo1,
            about: "A platform for exterior cleaning services, featuring an image gallery and service details.",
            demo: "https://imagzen.vercel.app/",
            code: "https://github.com/riteshk-007/imagzen",
            tags: ["React", "Firebase", "CSS"],
          },
          {
            name: "LearningForLifeDrivingSchool",
            image: logo1,
            about: "An e-commerce site for driving school services, integrating booking and payment functionalities.",
            demo: "https://nextjs-e-commerce-rk.vercel.app/",
            code: "https://github.com/riteshk-007/nextjs-store",
            tags: ["Next.js", "Redux", "JavaScript"],
          },
          {
            name: "Java Based Games",
            image: logo1,
            about: "A collection of engaging games developed in Java, providing fun and entertainment.",
            code: "https://github.com/riteshk-007/Chat-GPT-Clone",
            tags: ["Java", "Games", "OpenAI"],
          },
          {
            name: "App Development",
            image: logo1,
            about: "A versatile web application for managing workout routines, progress tracking, and performance analytics.",
            demo: "https://gym-exercise-six.vercel.app/",
            code: "https://github.com/riteshk-007/gym-exercise",
            tags: ["React", "Express", "MongoDB"],
          },
          {
            name: "Arcade Machine",
            image: logo1,
            about: "An online arcade platform where users can play classic games and share their scores with friends.",
            demo: "https://youtube-clone-by-ritesh.netlify.app/",
            code: "https://github.com/riteshk-007/Youtube-Clone-by-Tailwind-Css",
            tags: ["React", "Node.js", "CSS"],
          },
        ].map((project, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate={projectInView ? "animate" : "initial"}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            variants={fadeInUp}
            className="w-full"
          >
            <ProjectCard
              name={project.name}
              image={project.image}
              about={project.about}
              demo={project.demo}
              code={project.code}
              tags={project.tags}
              className="font-sans"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Project;
