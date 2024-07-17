import PropTypes from "prop-types";
const TeamCard = ({ name, title, image, bio }) => {
  return (
    <>
      <div className="flex flex-col items-center bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border dark:border-gray-600">
        <img
          className="w-24 h-24 rounded-full object-cover"
          src={image}
          alt="Team Member"
        />
        <h4 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
          {name}
        </h4>
        <p className="mt-2 text-gray-600 dark:text-gray-500">{title}</p>
        <p className="mt-4 text-gray-500 dark:text-gray-400 text-center">
          {bio}
        </p>
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
