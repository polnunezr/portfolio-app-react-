import React, { useState } from "react";

import { HiArrowNarrowRight } from "react-icons/hi";

import { BsCircleFill } from "react-icons/ai";

import { Link } from "react-scroll";
const Experience = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div
      name="Experience"
      className="w-full h-screen bg-[#806586] text-[#f0f8ff]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="max-w-[1000px] w-full grid grid-cols-1 gap-">
          <div className="sm:text-left pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#e3b8c6]">
              Recambios Marinos | 05/2023 - Actually
            </p>
          </div>
          <div className="sm:text-left pb-8 pl-4">
            <ul>
              <li>
                {" "}
                ● Proficiency in HTML, CSS, JavaScript.
              </li>
              <li>
                ● Website and software application designing, building, or maintaining.
              </li>
              <li>● Conferring with teams to resolve conflicts, prioritize needs, develop content criteria, or choose solutions.</li>
              <li>● Evaluating code to ensure it meets industry standards, is valid, is properly structured, and is compatible with browsers, devices, or operating systems.</li>
              <li>
                ● WordPress configuration: Installing and configuring WordPress on web servers, ensuring it is optimised for performance and security.
              </li>
              <li>
                ● Content management: Adding, editing and formatting content, such as text, images and videos, through the WordPress administration panel. This includes creating posts, pages and organising information.
              </li>
              <li>● Troubleshooting: Identify and resolve technical issues that may arise on the website, such as code errors, browser compatibility issues and performance problems.</li>
            </ul>
          </div>
        </div>

        <div className="max-w-[1000px] w-full grid grid-cols-1 gap-6">
          <div className="sm:text-left pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#e3b8c6]">
              Fabular.ai | 10/2022 - 01/2023
            </p>
          </div>
          <div className="sm:text-left pb-8 pl-4 h-full">
            <ul>
              <li>
                {" "}
                ● Followed policies and procedures related to application
                methods and quality standards at all times.
              </li>
              <li>
                ● Helped to achieve a consistent look and visual theme across
                the website by promoting uniform fonts, formatting, images, and
                layout.
              </li>
              <li>
                ● Interfaced with clients to identify business requirements.
              </li>
              <li>
                ● Provided effective troubleshooting and remediation for web
                applications.
              </li>
              <li>
                ● Remained dedicated to emerging technology and the latest
                digital marketing concepts.
              </li>
              <li>
                ● Successfully identified, diagnosed, and fixed website
                problems,including broken links, typographical errors, and
                formatting issues.
              </li>
              <li>
                ● Worked to assess competing websites in regards to content,
                look, and feel.
              </li>
            </ul>{" "}
          </div>
        </div>
        
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4"></div>

        <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-4">
          <Link to="skills" onClick={handleClick} smooth={true} duration={500}>
            {" "}
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-black hover:border-black">
              See Skills
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Experience;
