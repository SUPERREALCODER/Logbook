import { Suspense } from "react";
import PropTypes from "prop-types";
const ProjectCard = ({
  title,
  description,
  image,
  wlink,
  glink,
  projectType,
}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-4 rounded-lg p-6 lg:border-2 duration-300 dark:border-gray-800">
        {/* <div className=" flex-1"> */}
        <Suspense fallback={<div>Loading...</div>}>
          <img
            src={image}
            alt="project image"
            className="rounded-lg hover:scale-105 duration-300 object-center object-cover w-full md:max-w-xs lg:max-w-lg"
          />
        </Suspense>
        {/* </div> */}

        <div className=" gap-4 flex-1 w-full">
          <h1 className="text-2xl sm:text-4xl font-medium tracking-wide">
            {title}
          </h1>
          <p className="text-sm sm:text-base text-left text-gray-600 dark:text-gray-300 font-medium leading-loose line-clamp-3 mt-4">
            {description}
          </p>
          <div className="mt-6">
            <a href={wlink} target="_blank">
              <button className=" font-medium w-full md:w-fit mt-4 md:mr-4 rounded-lg px-4 py-2.5 bg-orange-500 text-white hover:bg-orange-600  focus:ring-cyan-500">
                Website
              </button>
            </a>
            {projectType === "Public" && (
              <a href={glink} target="_blank">
                <button className=" border-2 rounded-lg w-full md:w-fit mt-4 px-4 py-2 border-orange-500  hover:bg-orange-500 hover:text-white focus:ring-cyan-500 duration-200">
                  Github
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  wlink: PropTypes.string.isRequired,
  glink: PropTypes.string,
  projectType: PropTypes.string.isRequired,
};

export default ProjectCard;
