import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const navList = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const [toggleMode, setToggleMode] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const header = document.querySelector("header");
  //     if (window.scrollY > window.innerHeight && isHomePage) {
  //       header.classList.add("scrolled");
  //       setIsScrolled(true);
  //     } else {
  //       header.classList.remove("scrolled");
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [isHomePage]);

  useEffect(() => {
    if (toggleMode === true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [toggleMode]);
  const handleToggleMode = () => {
    setToggleMode(!toggleMode);
    setMenuOpen(false);
  };
  // const handleMenuOpen = () => {
  //   setMenuOpen(!isMenuOpen);
  // };
  // const handleClick = () => {
  //   handleToggleMode();
  //   handleMenuOpen();
  // };

  return (
    <>
      <header
        className={`${
          isHomePage
            ? "fixed bg-[rgba(255,255,255,0.05)] "
            : "sticky bg-[rgba(255,255,255,0.3)] backdrop-blur-lg"
        } w-full top-0 z-20 dark:border-gray-800 p-4 font-poppins shadow dark:bg-[#0D121C] dark:text-white duration-300  `}
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between relative">
          {/* logo */}
          <NavLink to="/">
            <div className="w-[100px] text-2xl md:text-4xl">
              <span className={`${isHomePage ? "text-white" : ""}`}>Bod</span>
              <span className="text-orange-500">hon</span>
            </div>
          </NavLink>

          {/* navigation */}
          <div className="flex items-center gap-x-5">
            {/* menu Open */}
            <button
              className={`${
                isHomePage ? "text-white" : "text-gray-800 dark:text-white "
              } block md:hidden text-2xl`}
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <IoClose /> : <RxHamburgerMenu />}
            </button>
            <ul className="gap-x-6 md:flex flex-row hidden">
              {navList.map((navItem, index) => (
                <NavLink
                  to={navItem.path}
                  key={index}
                  className={({ isActive }) =>
                    `flex items-center gap-x-1 duration-150 hover:text-orange-500 list-none cursor-pointer font-medium  dark:hover:text-orange-500 ${
                      isActive
                        ? "text-orange-500 dark:text-orange-500"
                        : isHomePage
                        ? "text-white"
                        : ""
                    }`
                  }
                >
                  {navItem.name}
                  {navItem.icon}
                </NavLink>
              ))}
            </ul>
            {/* Mode Toggle */}
            <div className="lg:border-l-2 lg:border-gray-400 dark:border-gray-600 lg:pl-4 hidden md:block">
              {toggleMode ? (
                <MdOutlineLightMode
                  className="text-2xl cursor-pointer dark:text-white dark:hover:text-orange-500 "
                  onClick={handleToggleMode}
                />
              ) : (
                <MdOutlineDarkMode
                  className={` ${
                    isHomePage ? "text-gray-300" : "text-gray-500"
                  } text-2xl cursor-pointer hover:text-orange-500 `}
                  onClick={handleToggleMode}
                />
              )}
            </div>

            {/* Sign In Button */}
            {/* <NavLink to={"/signin"}>
            <Button
              outline
              gradientDuoTone="pinkToOrange"
              size="sm"
              className="whitespace-nowrap"
            >
              Sign In
            </Button>
          </NavLink> */}
            {/* <Button
            // outline
            // gradientDuoTone="pinkToOrange"
            size="sm"
            className="whitespace-nowrap bg-transparent border border-transparent"
          >
            Sign In
          </Button> */}
            <button
              type="submit"
              className={`${
                isHomePage
                  ? "text-white border-orange-500"
                  : "border-orange-500"
              } whitespace-nowrap border-2 hover:border-gray-100 rounded-lg font-medium px-4 py-2 hover:bg-orange-500 hover:text-white duration-200 hidden md:block`}
            >
              Sign In
            </button>
          </div>
        </div>
      </header>
      {/* Menu Slider  */}
      <div
        className={`fixed left-0 top-16 w-full h-full bg-[#ffffff8a] dark:bg-[#0D121C] dark:text-white backdrop-blur-lg opacity-95 z-20 transform transition-transform duration-200 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="  h-full text-5xl">
          <div className="px-10">
            <ul>
              {navList.map((navItem, index) => (
                <NavLink
                  to={navItem.path}
                  key={index}
                  className={({ isActive }) =>
                    `flex items-center gap-x-1 my-10 duration-150 text-gray-800 dark:text-gray-400 hover:text-orange-500 list-none cursor-pointer font-medium dark:hover:text-orange-500 ${
                      isActive ? "text-orange-600 dark:text-orange-500" : ""
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {navItem.name}
                  {navItem.icon}
                </NavLink>
              ))}
            </ul>
            <div className="flex items-center gap-x-4">
              <button
                type="submit"
                className={`${
                  isHomePage
                    ? "text-gray-800 dark:text-white"
                    : "text-gray-800 dark:text-white"
                } whitespace-nowrap border-2 border-orange-500 rounded-lg font-medium px-6 py-4 hover:bg-orange-500 hover:text-white duration-200 w-full text-3xl`}
              >
                Sign In
              </button>
              <div className="lg:border-l-2 lg:border-gray-300 dark:border-gray-600 lg:pl-4">
                {toggleMode ? (
                  <MdOutlineLightMode
                    className="text-4xl cursor-pointer  dark:text-white dark:hover:text-orange-500 "
                    onClick={handleToggleMode}
                  />
                ) : (
                  <MdOutlineDarkMode
                    className="text-4xl cursor-pointer text-gray-5800 hover:text-orange-500 "
                    onClick={handleToggleMode}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
