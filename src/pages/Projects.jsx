import ProjectCard from "../components/ProjectCard";
import the_pandel from "../assets/images/projects/the_pandel.webp";
import CosmicCalendar from "../assets/images/projects/CosmicCalendar.webp";
import Veloxland from "../assets/images/projects/VELOXLAND.png";
import load_forecaster from "../assets/images/projects/load.png";
import CVisionImage from "../assets/images/projects/cvision.png";
import HomeasyImage from "../assets/images/projects/homeasy.png";
import YumikazeImage from "../assets/images/projects/hill.webp";
import LostHorizonsImage from "../assets/images/projects/losthorizon.webp";
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
  {
  id: 3,
  title: "Velox.ai",
  description:
    "An AI-powered platform that transforms YouTube videos, textbooks, and other learning materials into structured, easy-to-understand notes. Designed to support students and learners with features like Q&A generation, search-based summaries, and intuitive document processing.",
  image: Veloxland, // Replace with your actual image import/variable
  
  glink: "https://github.com/sumitxsan/Velox.ai", // Replace with actual GitHub link
  projectType: "Public",
  status: "Hackathon Winner · Prototype Completed",
  role: "Idea · Backend · Frontend",
  techStack: "React · Flask · Python · Whisper API · LLM · Google Colab · ngrok",
  why: "We built this during a national hackathon, where it emerged as a winner. Our motivation came from how scattered and overwhelming modern learning resources have become. From long YouTube lectures to dense PDFs and textbooks, students often struggle to extract clarity. We wanted to change that — using AI to convert complex educational content into structured notes, auto-generated Q&A, and search-to-learn features to make study time more efficient. <span class='readmore'>Read more</span>",
},
{
  id: 4,
  title: "Load Forecaster",
  description:
    "A web-based AI-powered tool that predicts blackout probability across West Bengal. With integrated maps, a user-friendly interface, and synthetic data modeling, it helps visualize grid stress and energy distribution insights in real-time.",
  image: load_forecaster, // replace with actual image import/variable
   // optional live deployment link
  glink: "https://github.com/Sayan30092004/LoadForecaster", // your GitHub repo
  projectType: "Hackathon Project",
  status: "Prototype Complete · In Progress",
  role: "Idea · Frontend · ML Integration",
  techStack: "React · TypeScript · Vite · Flask · TensorFlow · Leaflet.js",
  why: "Built for a smart infrastructure hackathon, Load Forecaster aims to address India’s growing power management challenges. The tool was inspired by recurring blackouts and the need for proactive, data-driven forecasting. By simulating realistic energy demand and applying a weighted probability model, the system forecasts potential blackouts — helping planners, factories, and smart grids take early action. <span class='readmore'>Read more</span>",
},
{
  id: 5,
  title: "CVision",
  description:
    "An AI-powered recruitment platform that automates resume screening, generates interview questions, and intelligently matches candidates with job roles. Built with Next.js and Streamlit, it features face detection for secure remote interviews and a seamless AI-driven hiring workflow.",
  image: CVisionImage, // Replace with your actual image import/variable
  glink: "https://github.com/SwapnanilAdhikary/CVision", // Replace with actual GitHub link
  projectType: "Public",
  status: "Prototype Completed",
  role: "Idea · Fullstack · AI Integration",
  techStack: "Next.js · TypeScript · Streamlit · Python · OpenCV · Gemini API · Tailwind",
  why: "We built CVision to simplify the hiring journey — especially for freshers. The recruitment process is often time-consuming and biased. CVision solves this by automating shortlisting, preparing tailored interview questions, and matching applicants to the right roles. It also incorporates face detection to enhance trust in remote interviews. <span class='readmore'>Read more</span>",
},
{
  id: 6,
  title: "Homeasy",
  description:
    "A full-stack web application that streamlines home maintenance and repair services. Homeasy connects users with trusted professionals for plumbing, electrical, cleaning, and other essential home services — all managed through a sleek and intuitive interface.",
  image: HomeasyImage, // Replace with your actual image import/variable
  wlink: "https://homeasy-eight.vercel.app/",
  glink: "https://github.com/SUPERREALCODER/Homeasy", // Replace with actual GitHub repo link
  projectType: "Private",
  status: "MVP in Development",
  role: "Founder · Fullstack Developer · UI/UX Designer",
  techStack: "React · Node.js · Express · PostgreSQL · Tailwind · Clerk Auth · NeonDB",
  why: "Homeasy was born out of a simple frustration: finding reliable and fast home services shouldn’t be so difficult. With this app, I aimed to build a one-stop platform for household repairs and maintenance. It also opens up opportunities for local workers and simplifies the entire service flow — from booking to payment. <span class='readmore'>Read more</span>",
},
{
  id: 7,
  title: "Yumikaze",
  description:
    "A generative storytelling platform that transforms satellite data into ambient art and narratives. Yumikaze blends space imagery with AI-generated visuals, poetry, and soundscapes — offering an immersive exploration of Earth from orbit.",
  image: YumikazeImage, // Replace with your actual image import/variable
  glink: "https://github.com/SwapnanilAdhikary/YumiKaze", // Replace with actual GitHub repo link
  projectType: "Hackathon (ISRO)",
  status: "Winner · Experimental Build",
  role: "Idea · AI/ML Integration · Frontend Dev",
  techStack: "Next.js · OpenAI API · D3.js · TailwindCSS · Satellite APIs",
  why: "Built during the ISRO Hackathon, Yumikaze aimed to reimagine how space data could be felt rather than just read. We combined satellite imagery with generative AI to create poetic, dream-like visualizations of our planet — giving users an emotional connection to Earth’s dynamic systems. <span class='readmore'>Read more</span>",
},
{
  id: 8,
  title: "Lost Horizons",
  description:
    "Lost Horizons is a gripping visual novel set in the remote future on a scrapyard moon. Follow the journey of a nameless youngster who, after losing all memory of his past, toils alongside his grandfather in a desolate scrapyard. A chance encounter with a teenage girl named Vannessa and a pilot named Drax sets him on an interstellar journey. As hope turns into tension, the story unveils dark secrets and ethical dilemmas, forcing him to face his identity and fractured memories. With rich storytelling and compelling characters, Lost Horizons explores memory, belonging, and the struggle between light and darkness.",
  image: LostHorizonsImage, // Replace with your actual image import/variable
  glink: "https://superrealcoder.itch.io/lost-horizons", // Replace with actual GitHub repo link
  projectType: "Visual Novel · NASA Hackathon",
  status: "Completed",
  role: "Story · Direction · Scripting",
  techStack: "Ren'Py · Python · Photoshop · Audacity",
  why: "Created as part of the NASA International Space Apps Challenge, this project explored how narrative can communicate complex interstellar and ethical themes to a wider audience. It was my personal journey into crafting a story-driven experience that blended futuristic worldbuilding with human emotion. <span class='readmore'>Read more</span>",
}








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
