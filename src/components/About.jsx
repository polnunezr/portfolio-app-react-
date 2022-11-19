import React, { useState } from "react";

import { HiArrowNarrowRight } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";

import { Link } from "react-scroll";
const About = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div name="about" className="w-full h-screen bg-[#806586] text-[#f0f8ff]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#e3b8c6]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Pol, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me.What would you do if you had a
              software expert available at your fingertips?
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          <Link
            to="Experience"
            onClick={handleClick}
            smooth={true}
            duration={500}
          >
            {" "}
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-black hover:border-black">
              See experience
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
          <Link to="work" onClick={handleClick} smooth={true} duration={500}>
            {" "}
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-black hover:border-black">
              See Work
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

export default About;
