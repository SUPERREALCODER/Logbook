import { Link } from "react-router-dom";
import intro from "../assets/videos/intro.mp4";

const Hero = () => {
  return (
    <>
      <div className=" w-full h-screen bg-red-50 ">
        <video
          src={intro}
          autoPlay
          loop
          muted
          poster="https://www.google.com/imgres?q=banner%20image&imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F11%2F78%2Fcf%2F1178cf5dd4a6ccd59318305541030945.jpg&imgrefurl=https%3A%2F%2Fin.pinterest.com%2Fpin%2Fblue-neon-future-double-exposure-youtube-banner--479281585353831034%2F&docid=LvzCT00355hHHM&tbnid=VrkgU6CoGzzMfM&vet=12ahUKEwiSwpqSov-GAxWR1TgGHWs1DPkQM3oECFEQAA..i&w=1200&h=567&hcb=2&ved=2ahUKEwiSwpqSov-GAxWR1TgGHWs1DPkQM3oECFEQAA"
          className="w-full h-full object-fill "
        />
        <div className="flex flex-col items-center justify-center inset-0 absolute px-4">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold leading-tight text-left sm:text-center text-white duration-100">
            Welcome to Bod<span className="text-orange-500">hon</span>
          </h1>
          <p className="text-lg md:text-2xl sm:text-center text-white duration-100">
            We are a creative agency focused on building brands and digital
            products.
          </p>
          <Link to={"/projects"}>
            <button className="mt-10 px-6 py-3 bg-white text-black font-bold rounded-md hover:bg-gray-100">
              Explore Our Work
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
