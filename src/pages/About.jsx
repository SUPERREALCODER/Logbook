// About.jsx
"use client";
import { useEffect, useState, useRef } from "react";
import TeamCard from "../components/TeamCard";
import axios from "axios";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const githubUsers = ["superrealcoder"];

const About = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const container = useRef();

  // Fetch GitHub users
  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const membersData = await axios.all(
          githubUsers.map((username) =>
            axios.get(`https://api.github.com/users/${username}`)
          )
        );
        setUsers(membersData.map((r) => r.data));
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGithubData();
  }, []);

  
  

  return (
   <>
      <div ref={container} className="flex flex-col items-center min-h-screen py-10 dark:bg-[#0d121cf9]">
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl text-blue-600 dark:text-blue-500 font-semibold tracking-wide uppercase">
              About Me
            </h2>
            <p className="mt-1 text-4xl leading-10 font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:leading-none lg:text-6xl">
              🧭 Who I Am
            </p>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              Hi, I’m Deba — also known as SRC in the worlds of code.
              Short for Superrealcoder, it began as a username, but it stuck —
              a quiet reminder to create things that are real, yet a little beyond.

              An Inspired Explorer, I navigate between the logic of machines and the mystery of meaning —
              coding realities and charting ideas that might just matter.

              I believe in building what feels true, playful, and sometimes even a little wild —
              things that help, express, surprise, or simply spark curiosity.


            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              🚀 What Drives Me
            </h3>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              I explore the edges where technology, sustainability, and curiosity intersect.
              From building full-stack web platforms, crafting IoT systems, developing visual novels, and writing research papers — to training in PV systems, working on electric bikes, or designing navigation visors for riders — I treat every project like an expedition.

              I’ve tried building startups — some stalled, some sparked, and all shaped me.
              Now, I build with intention: what I create should help someone, somewhere, even quietly.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              
            🔎 What I Care About
            </h3>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
             Designing with thought.

             Solving with joy.

             Staying curious.

             Trusting the process — and the people in it.

             Following inspiration (often from my mother, nature, or books).

            </p>
          </div>


           <div className="mt-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              
            🎒 You’ll Find Me…
            </h3>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
             Writing or editing code with a sense of play

             Making interfaces that feel something

             Talking about sustainability, quantum tech, or space

             Recording raw vlogs under “Walk with Deba”

             Building towards something real, not perfect
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              
            🧠 A Line I Hold Close
            </h3>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
             “To explore and create something that’s true and fun — that’s when it blossoms.”
            </p>
          </div>


          <div className="mt-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              
            🌍 Want to explore with me?
            </h3>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
             Let’s build things that matter — or at least wonder together.
             → [Contact me] or [See Projects]
            </p>
          </div>


          <div className="mt-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Socials
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
