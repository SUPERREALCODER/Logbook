import { Link } from "react-router-dom";
import person from "../assets/images/projects/person.png";
import pankh from "../assets/images/projects/pankh.png";
import hill from "../assets/images/projects/hill.webp";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);


const Hero = () => {
  const titleRef = useRef(null);
  const splitRef = useRef(null);

  useEffect(() => {
    const el = splitRef.current;
    if (el) {
      el.style.opacity = 0; // Hide initially
    }
    document.fonts.ready.then(() => {
      setTimeout(() => {
        const split = SplitText.create(el, {
          type: "chars, words",
          mask: "lines",
          linesClass: "line",
          charsClass: "char"
        });
  // Show the parent element before animating the chars
    el.style.opacity = 1;
        gsap.fromTo(
          split.chars,
          { y: 50, opacity: 0 },
          // Animate chars from below and fade in 
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.09,
            ease: "power3.out"
          }
        );
      }, 1000); 
    },[]);

    gsap.from(titleRef.current, {
      duration: 4,
      scale: 0.5,      // starts small, grows to normal size
      opacity: 1,      // starts invisible, fades in
      ease: "back.out(1.7)" // nice popping effect
    });
  }, []);
  return (
    <>
      <div className=" w-full h-screen bg-red-50 ">
        
      
       

        <div className="relative w-full h-full overflow-hidden">
  {/* Background image */}
  <img
    src={hill}
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover"
  />
  {/* Person image, anchored to bottom */}
  <img
    src={person}
    alt="Person"
    className="absolute bottom-0 left-0 -translate-x-1 h-2/3 object-contain scale-125"
    style={{ zIndex: 0 }}
  />
</div>


        
        <div className="flex flex-col items-center justify-center inset-0 absolute px-4">
          <h1 ref={titleRef}
          className="text-5xl sm:text-7xl md:text-9xl font-bold leading-tight text-left sm:text-center text-white duration-100"
          style={{ zIndex: 2 }}>
            Inspired Explo<span className="text-blue-500">rer</span>
          </h1>
          <p  ref={splitRef}
          className="text-lg md:text-8xl sm:text-center text-blue-500 duration-100 font-dance"
           style={{ zIndex: 2 }}>
            Charting Ideas, Coding Realities
          </p>
          <Link to={"/projects"}>
 <button className="mt-10 px-6 py-3 bg-white text-black font-bold rounded-md hover:bg-blue-500"
 style={{ zIndex: 2 }}>
   See what I've built
</button>


          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
