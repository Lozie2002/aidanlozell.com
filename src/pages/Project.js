import React from "react";
import ProjectCard from "../components/Project/ProjectCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Java from "../photos/ProjectPhotos/Java.png";
import AppDevelopment from "../photos/ProjectPhotos/FlutterLogo.jpg";
import StPhilsLogo from "../photos/ProjectPhotos/StPhilsLogo.png";
import L4F from "../photos/ProjectPhotos/LF4.webp";
import LushExt from "../photos/ProjectPhotos/LushCleaningLogo.png";
import logo1 from "../photos/logo.png";

function Project() {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  const [projectInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="bg-white flex flex-col items-center justify-center relative overflow-hidden px-6 py-12">
      <h1 className="text-5xl lg:text-7xl font-extrabold text-customColor leading-tight mb-6 text-center">
        My Projects
      </h1>

      <p className="text-lg text-black mb-10 text-center max-w-4xl">
        A showcase of my projects highlighting my web development skills. Each
        project demonstrates my ability to create responsive, user-friendly
        applications using modern technologies.
      </p>

      <div className="z-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 mt-6 w-full max-w-7xl">
        {[
          {
            name: "React Portfolio Website",
            image: logo1,
            about:
              "A personal portfolio website built with React, showcasing various projects and skills.",
            demo: "https://blog-website-riteshk-007.vercel.app/",
            code: "https://github.com/riteshk-007/blog-website",
            tags: ["React", "CSS", "JavaScript"],
          },
          {
            name: "LushExteriorCleaning.com",
            image: LushExt,
            about:
              "A platform for exterior cleaning services, featuring an image gallery and service details.",
            demo: "https://lushexteriorcleaning.com/",
            code: "/project",
            tags: ["React", "Firebase", "CSS"],
          },
          {
            name: "LearningForLifeDriving",
            image: L4F,
            about:
              "An e-commerce site for driving school services, integrating booking and payment functionalities.",
            demo: "https://learning4lifedrivingschool.com.au/",
            code: "/nextjs-store",
            tags: ["Next.js", "Redux", "JavaScript"],
          },
          {
            name: "St Phils Anglican Church",
            image: StPhilsLogo,
            about:
              "A website for a local church, providing information on services, events, and community activities.",
            code: "https://stphils.org/",
            tags: ["Java", "Games", "OpenAI"],
          },
          {
            name: "App Development",
            image: AppDevelopment,
            about:
              "Various applications developed to practice implementing diverse features. Projects include a Church App, Fuel Economy App, Dating App, and more.",
            demo: "https://gym-exercise-six.vercel.app/",
            code: "https://github.com/riteshk-007/gym-exercise",
            tags: ["React", "Express", "MongoDB"],
          },
          {
            name: "Java Based Games",
            image: Java,
            about:
              "A collection of engaging games developed in Java, providing fun and entertainment.",
            code: "https://github.com/riteshk-007/Chat-GPT-Clone",
            tags: ["Java", "Games", "OpenAI"],
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
              demoText="See More"
              className="font-sans"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Project;
