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
        <div className="max-w-[1000px] w-full grid grid-cols-1 gap-">
          <div className="sm:text-left pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#e3b8c6]">
              Kantar | 01/2022 - 09/2022
            </p>
          </div>
          <div className="sm:text-left pb-8 pl-4">
            <ul>
              <li>
                {" "}
                ● I work with different databases and back-end and front-end
                contexts.
              </li>
              <li>
                ● Performance analysis and optimization of databases distributed
                in various geographical locations.
              </li>
              <li>● Incident resolution and problem management.</li>
              <li>● Design and management of reports and documentation.</li>
              <li>
                ● I work together with the team of developers to ensure a
                correct and efficient distribution of the database and its
                storage.
              </li>
              <li>
                ● Development of new applications and improvement of existing
                applications.
              </li>
              <li>● Provision of information to databases.</li>
            </ul>
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
