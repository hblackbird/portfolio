import React from "react";
import Image from "../assets/person.png";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-blue-500 to-purple-700 ">
      <div className="max-w-screen-lg h-full flex flex-col justify-center items-center mx-auto px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full ">
          <h1 className="font-bold text-white text-4xl sm:text-7xl">
            I'm a Front-end Developer
          </h1>
          <p className="py-4 max-w-md text-gray-400">
            On this website, I have detailed my personal attributes, skills and
            endeavours taken to enhance my abilities. Pleasure to make your
            acquaintance.
          </p>
          <div>
            <Link to="portfolio" smooth duration={700} className="text-white w-fit px-4 py-3 my-2 flex cursor-pointer items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              Portfolio
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Image}
            alt="me"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
