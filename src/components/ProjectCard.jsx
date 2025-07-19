import { Suspense, useState } from "react";
import PropTypes from "prop-types";

const ProjectCard = ({
  title,
  description,
  image,
  wlink,
  glink,
  projectType,
  status,
  role,
  techStack,
  why,
}) => {
  const [expandedWhy, setExpandedWhy] = useState(false);

  const shortWhy =
    why.length > 250 ? why.slice(0, 250) + "..." : why;

  return (
    <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-4 rounded-lg p-6 lg:border-2 duration-300 dark:border-gray-800 shadow-[0_0_20px_rgba(59,130,246,0.7)]">
      <Suspense fallback={<div>Loading...</div>}>
        <img
          src={image}
          alt="project"
          className="rounded-lg hover:scale-105 duration-300 object-center object-cover w-full md:max-w-xs lg:max-w-lg"
        />
      </Suspense>

      <div className="flex-1 w-full">
        <h1 className="text-2xl sm:text-4xl font-medium tracking-wide">{title}</h1>

        {/* Full Description (always shown) */}
        <p className="text-sm sm:text-base text-left text-gray-600 dark:text-gray-300 font-medium leading-loose mt-4">
          {description}
        </p>

        {/* Why I built this (collapsible) */}
        <p className="text-sm sm:text-base text-left text-gray-600 dark:text-gray-300 font-medium mt-4">
          <strong className="text-blue-600 dark:text-blue-400">Why I built this: </strong>
          {expandedWhy ? why : shortWhy}
        </p>

        {why.length > 250 && (
          <button
            className="mt-2 text-blue-500 hover:underline text-sm"
            onClick={() => setExpandedWhy(!expandedWhy)}
          >
            {expandedWhy ? "Read Less" : "Read More"}
          </button>
        )}

        {/* Meta Info */}
        <div className="text-sm text-gray-700 dark:text-gray-400 mt-4 space-y-1">
          <p><strong>Status:</strong> {status}</p>
          <p><strong>Role:</strong> {role}</p>
          <p><strong>Tech Stack:</strong> {techStack}</p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <a href={wlink} target="_blank" rel="noopener noreferrer">
            <button className="font-medium px-4 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Website
            </button>
          </a>
          {projectType === "Public" && (
            <a href={glink} target="_blank" rel="noopener noreferrer">
              <button className="border-2 px-4 py-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition duration-200">
                Github
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  wlink: PropTypes.string.isRequired,
  glink: PropTypes.string,
  projectType: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  techStack: PropTypes.string.isRequired,
  why: PropTypes.string.isRequired,
};

export default ProjectCard;
