import { useEffect, useState } from "react";
import TeamCard from "../components/TeamCard";
import axios from "axios";

const About = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const githubUsers = ["darkxamper", "superrealcoder"];

  useEffect(() => {
    const fetchGithubData = async () => {
      // try {
      //   const membersData = await Promise.all(
      //     githubUsers.map(async (username) => {
      //       const response = await fetch(
      //         `https://api.github.com/users/${username}`
      //       );
      //       if (!response.ok) {
      //         throw new Error(`Failed to fetch data for user: ${username}`);
      //       }
      //       return response.json();
      //     })
      //   );
      //   setUsers(membersData);
      //   console.log(membersData);
      // } catch (error) {
      //   console.log("Error Fetching Data: ", error);
      // } finally {
      //   setLoading(false);
      // }

      try {
        const membersData = await axios.all(
          githubUsers.map((username) =>
            axios.get(`https://api.github.com/users/${username}`)
          )
        );
        setUsers(membersData.map((response) => response.data));
        console.log(membersData);
      } catch (error) {
        console.log("Error Fetching Data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGithubData();
  });

  // const team = [
  //   {
  //     name: "John Doe",
  //     title: "CEO",
  //     image: "https://via.placeholder.com/100",
  //     description:
  //       "John has over 20 years of experience in the industry and is dedicated to leading our company to success.",
  //   },
  //   {
  //     name: "Jane Smith",
  //     title: "CTO",
  //     image: "https://via.placeholder.com/100",
  //     description:
  //       "Jane is a tech enthusiast with a passion for innovation and development.",
  //   },
  //   {
  //     name: "Alice Johnson",
  //     title: "COO",
  //     image: "https://via.placeholder.com/100",
  //     description:
  //       "Alice brings a wealth of operational expertise and a track record of success.",
  //   },
  // ];

  return (
    <>
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
            {loading ? (
              <h1 className="text-xl animate-pulse">Loading...</h1>
            ) : (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {users.map((member) => (
                  <TeamCard
                    key={member.id}
                    name={member.login}
                    title={member.title || "Team Member"}
                    image={member.avatar_url}
                    bio={member.bio || "No Bio Available"}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
