import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Links = () => {
  const links = [
    {
      id: 1,
      link: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/hblackbird/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      link: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/hblackbird",
    },
    {
      id: 3,
      link: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:huseyin.karakus18@ogr.atauni.edu.tr",
    },
    {
      id: 4,
      link: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex top-[35%] flex-col left-0 fixed">
      <ul>
        {links.map(({ id, link, href, style, download }) => (
          // eslint-disable-next-line
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-5px] hover:rounded-md duration-200 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              rel="noreferrer"
              download={download}
              target="_blank"
              className="flex justify-between items-center w-full text-white "
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
