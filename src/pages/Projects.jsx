import ProjectCard from "../components/ProjectCard";
import the_pandel from "../assets/images/projects/the_pandel.webp";
import CosmicCalendar from "../assets/images/projects/CosmicCalendar.webp";
const projects = [
  {
    id: 1,
    title: "Cosmic Calendar",
    description:
      "Cosmic Calendar is an interactive web application that condenses the history of the universe into a single year calendar. It provides a fascinating way to visualize major events from the Big Bang to the present day, showing just how recent human history is in the grand scheme of things.",
    image: CosmicCalendar,
    wlink: "https://tqqg95-3000.csb.app/",
    glink: "https://github.com/SUPERREALCODER/Cosmic_Calender",
    projectType: "Public",
    status: "Completed",
    role: "Full Stack Developer",
    techStack: "React, Node.js, Express, MongoDB",
    why: "To create an engaging educational tool that helps people understand the vast timeline of the universe in a relatable way.",
  },
  {
    id: 2,
    title: "The Pandel",
    description:
      "An upcoming web app that maps and curates key Durga Puja pandals and related cultural events — helping travelers, art lovers, and locals explore the celebration with more intention and delight.",
    image: the_pandel,
    wlink: "https://pandel.blogs.bodhon.in/",
    glink: "https://www.example.com",
    projectType: "Private",
    status: "Concept Released .In Progress",
    role:"Idea + UX + Frontend",
    techStack: " HTML · CSS · JS ",
    why: "During a solo journey through Kolkata’s Durga Puja — the world’s largest public art festival — I found it hard to decide which pandals to visit next. That moment of wandering sparked this idea: a cultural companion for one of India’s most visually stunning traditions.",
  },
];
const Projects = () => {
  return (
    <>
      <div className=" w-full min-h-screen dark:bg-[#0d121cf9] dark:text-white">
        <div className=" max-w-[1280px] h-full mx-auto relative">
          <h1 className="p-6 text-4xl md:text-7xl flex justify-center text-blue-500 font-bold tracking-wide">
            Our Work
          </h1>
          <div className="gap-10 grid grid-cols-1 md:px-10 pb-10 ">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                wlink={project.wlink}
                glink={project.glink}
                projectType={project.projectType}
                status={project.status}
                role={project.role}
                techStack={project.techStack}
                why={project.why}
              />
            ))}
          </div>
          <h1 className="text-2xl md:text-4xl text-center font-mono border-2 p-4 border-dashed border-blue-500">
            More Projects <span className="text-blue-500">Coming Soon!</span>{" "}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Projects;
