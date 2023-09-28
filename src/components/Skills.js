import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import reactjs from "../assets/react.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
const Skills = () => {
  const skills = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-400",
    },
    {
      id: 3,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactjs,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
  ];
  return (
    <div name="skills" className="w-full text-white bg-blue-500">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold p-2 inline border-b-4 border-b-blue-900">
            Skills
          </p>
          <p className="py-6">
            In this section, I've listed some technologies that I can utilise.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-110 duration-200 py-2 rounded-lg ${style}`} 
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
