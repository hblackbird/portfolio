import React from "react";

const About = () => {
  return (
    <div name="about" className="h-screen w-full bg-gradient-to-b from-purple-700 to-blue-500">
      <div className="max-w-screen-lg h-full w-full flex flex-col justify-center items-center mx-auto p-4 text-white">
        <div className="pb-8">
          <p className="text-6xl font-bold inline border-b-4 border-gray-600">
            About
          </p>
        </div>
        <p className="mt-14">
          Hello, my name is Hüseyin. I graduated from Istanbul Gelisim
          University with a degree in computer programming, followed by a degree
          in computer engineering from Atatürk University. Then I completed a
          web developer internship with Istanbul Airport-İGA, where I gained
          valuable experience. Currently, I am honing my skills in front-end
          development.
        </p>
      </div>
    </div>
  );
};

export default About;
