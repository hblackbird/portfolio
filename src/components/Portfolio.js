import React from "react";
import flightx from "../assets/flight-x.png";
import havadurumu from "../assets/hava-durumu.png";
import quizapp from "../assets/quiz-app.png";
import ziyaretcitakip from "../assets/ziyaretci-takip.jpg";
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: flightx,
      code: "https://github.com/hblackbird/amadeus-case",
      demo: "https://amadeus-case.web.app/",
    },
    {
      id: 2,
      src: havadurumu,
      code: "#",
      demo: "https://havadurumu-52852.web.app/",
    },
    {
      id: 3,
      src: quizapp,
      code: "https://github.com/hblackbird/quiz-app",
      demo: "https://quiz-app-ad126.web.app/",
    },
    {
      id: 4,
      src: ziyaretcitakip,
      code: "https://github.com/hblackbird/ziyaretcitakip",
      demo: "#",
    },
  ];
  return (
    <div name="portfolio" className="w-full text-white bg-gradient-to-b from-blue-500 to-purple-700">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-400">
            Portfolio
          </p>
          <p className="py-6">
            This section shows some of my completed projects.
          </p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"
        >
          {projects.map(({ id, src, code, demo }) => (
            <div key={id} className="shadow-md shadow-cyan-400 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-110 h-52 w-full"
              />
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110">
                    Demo
                  </button>
                </a>
                <a href={code} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
