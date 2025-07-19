import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
const TeamCard = ({ name, title, image, bio }) => {
  return (
    <>
      <div className=" bg-gradient-to-t from-transparent via-slate-300 p-[2px] rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.7)]">
        <div className="h-full flex flex-col justify-between bg-white dark:bg-gray-900 p-6 rounded-[calc(0.75rem-2px)] border dark:border-gray-600">
          <div className="flex flex-col items-center">
            <img
              className="w-32 h-32 rounded-full object-cover"
              src={image}
              alt="Team Member"
            />
            <h4 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              {name}
            </h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-500">
              {title}
            </p>
            <p className="mt-6 text-gray-500 dark:text-gray-400 text-center">
              {bio}
            </p>
          </div>
          <div className="text-right">
            <a
              target="_blank"
              href={`https://github.com/${name}`}
              className="mt-6 inline-block transition-all duration-300"
            >
              <FaGithub className="text-gray-600 dark:text-white w-8 h-8 hover:text-gray-800" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default TeamCard;
