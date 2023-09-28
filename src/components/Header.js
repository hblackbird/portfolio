import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
const Header = () => {
  const [nav, setNav] = useState(false);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const linkler = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
      if (screenSize.width > 768) {
        setNav(false);
      }
    };
  }, [screenSize]);
  return (
    <div name="header" className="flex justify-center items-center h-24 w-full px-4  text-white fixed">
      <ul className="hidden md:flex">
        {linkler.map((link) => (
          <li
            key={link.id}
            className="px-4 cursor-pointer uppercase font-medium hover:scale-125 duration-200"
          >
            <Link to={link.link} smooth duration={500} >{link.link}</Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => {
          setNav(!nav);
        }}
        className="flex md:hidden"
      >
        {nav ? (
          <AiOutlineClose
            className="top-0 right-0 z-10 cursor-pointer"
            size={30}
          />
        ) : (
          <AiOutlineMenu
            className="top-0 right-0 z-10 cursor-pointer"
            size={30}
          />
        )}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute h-screen w-full bg-gradient-to-b from-blue-900 to-purple-950 left-0 top-0">
          {linkler.map((link) => (
            <li
              key={link.id}
              className="px-4 py-6 text-4xl cursor-pointer uppercase font-medium"
            >
              <Link onClick={()=>setNav(!nav)} to={link.link} smooth duration={500} >{link.link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
