import Card from "../components/ProjectCard";
import ThePandel from "../assets/images/projects/ThePandel.webp";
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
  },
  {
    id: 2,
    title: "The Pandel",
    description:
      "Welcome to the Durga Puja Blog, your go-to source for all things related to Durga Puja celebration! This website is dedicated to providing insightful articles, vibrant photos, and engaging content that capture the essence of Durga Puja festivities.",
    image: ThePandel,
    wlink: "https://pandel.blogs.bodhon.in/",
    glink: "https://www.example.com",
    projectType: "Private",
  },
  {
    id: 3,
    title: "Project 3",
    description: "This is a description of project 3",
    image: "https://via.placeholder.com/600x300",
    wlink: "https://www.example.com",
    glink: "https://www.example.com",
    projectType: "Public",
  },
  {
    id: 4,
    title: "Project 4",
    description: "This is a description of project 4",
    image: "https://via.placeholder.com/600x300",
    wlink: "https://www.example.com",
    glink: "https://www.example.com",
    projectType: "Public",
  },
];
const Projects = () => {
  return (
    <>
      <div className=" w-full min-h-screen dark:bg-[#0d121cf9] dark:text-white">
        <div className=" max-w-[1280px] h-full mx-auto relative">
          <h1 className="p-6 text-4xl md:text-7xl flex justify-center text-orange-500 font-bold tracking-wide">
            Our Work
          </h1>
          <div className="gap-10 grid grid-cols-1 md:px-10 pb-10 ">
            {projects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                wlink={project.wlink}
                glink={project.glink}
                projectType={project.projectType}
              />
            ))}
          </div>
          <h1 className="text-2xl md:text-4xl text-center font-mono border-2 p-4 border-dashed border-orange-500">
            More Projects <span className="text-orange-500">Coming Soon!</span>{" "}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Projects;
