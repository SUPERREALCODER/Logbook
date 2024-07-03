import TeamCard from "../components/TeamCard";

const About = () => {
  const team = [
    {
      name: "John Doe",
      title: "CEO",
      image: "https://via.placeholder.com/100",
      description:
        "John has over 20 years of experience in the industry and is dedicated to leading our company to success.",
    },
    {
      name: "Jane Smith",
      title: "CTO",
      image: "https://via.placeholder.com/100",
      description:
        "Jane is a tech enthusiast with a passion for innovation and development.",
    },
    {
      name: "Alice Johnson",
      title: "COO",
      image: "https://via.placeholder.com/100",
      description:
        "Alice brings a wealth of operational expertise and a track record of success.",
    },
  ];

  return (
    <>
      {/* <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
      <h1 className="text-7xl">About USSSSSSSS</h1>
    </div> */}

      <div className="flex flex-col items-center min-h-screen py-10 dark:bg-[#0d121cf9]">
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl text-orange-600 dark:text-orange-500 font-semibold tracking-wide uppercase">
              About Us
            </h2>
            <p className="mt-1 text-4xl leading-10 font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:leading-none lg:text-6xl">
              Our Story
            </p>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              We are a creative agency focused on building brands and digital
              products.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Our Mission
            </h3>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Our mission is to deliver high-quality creative solutions that
              help businesses grow and succeed in the digital world.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Meet Our Team
            </h3>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Example team member */}
              {/* <Card></Card>
              <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border">
                <img
                  className="w-24 h-24 rounded-full object-cover"
                  src="https://via.placeholder.com/100"
                  alt="Team Member"
                />
                <h4 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                  John Doe
                </h4>
                <p className="mt-2 text-gray-600">CEO</p>
                <p className="mt-4 text-gray-500 text-center">
                  John has over 20 years of experience in the industry and is
                  dedicated to leading our company to success.
                </p>
              </div>

              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                <img
                  className="w-24 h-24 rounded-full object-cover"
                  src="https://via.placeholder.com/100"
                  alt="Team Member"
                />
                <h4 className="mt-4 text-xl font-semibold text-gray-900">
                  Jane Smith
                </h4>
                <p className="mt-2 text-gray-600">CTO</p>
                <p className="mt-4 text-gray-500 text-center">
                  Jane is a tech enthusiast with a passion for innovation and
                  development.
                </p>
              </div>

              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                <img
                  className="w-24 h-24 rounded-full object-cover"
                  src="https://via.placeholder.com/100"
                  alt="Team Member"
                />
                <h4 className="mt-4 text-xl font-semibold text-gray-900">
                  Alice Johnson
                </h4>
                <p className="mt-2 text-gray-600">COO</p>
                <p className="mt-4 text-gray-500 text-center">
                  Alice brings a wealth of operational expertise and a track
                  record of success.
                </p>
              </div> */}
              {team.map((member) => (
                <TeamCard
                  key={member.name}
                  name={member.name}
                  title={member.title}
                  image={member.image}
                  description={member.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
