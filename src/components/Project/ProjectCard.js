import React from "react";
import PropTypes from "prop-types";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCard({ name, about, image, demo, code, tags }) {
  return (
    <section className="bg-white text-black body-font rounded-lg mb-10 shadow-2xl hover:shadow-customColor transition-shadow duration-300 w-full md:max-w-lg mx-auto">
      <div className="flex flex-col h-full items-start justify-between">
        <div className="w-full">
          <img
            className="object-cover object-center rounded w-full border-customColor shadow-2xl"
            alt={`Screenshot of ${name}`}
            src={image}
            loading="lazy"
          />
        </div>
        <div className="px-5 py-4 flex flex-col justify-between flex-grow">
          <h2 className="title-font sm:text-3xl text-2xl mb-4 font-semibold text-customColor">
            {name}
          </h2>
          <p className="mb-6 leading-relaxed text-black text-base">
            {about}
          </p>
          <div className="flex flex-wrap mb-4">
            {tags.map((tag, index) => (
              <span key={index} className="inline-flex items-center justify-center py-1 px-3 mx-1 text-xs font-medium bg-black 800 text-gray-300 rounded">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex justify-start">
            {demo && (
              <a href={demo} target="_blank" rel="noreferrer">
                <button className="inline-flex text-white bg-customColor border-0 py-2 px-5 focus:outline-none font-medium items-center justify-center gap-1 hover:bg-customColor rounded text-lg">
                  See More <BiLinkExternal />
                </button>
              </a>
            )}
            <a href={code} target="_blank" rel="noreferrer">
              <button className="ml-4 inline-flex text-white bg-black border-0 py-2 px-5 focus:outline-none font-medium items-center justify-center gap-1 hover:bg-gray-600 rounded text-lg">
                Code <BsGithub />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  demo: PropTypes.string,
  code: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;
