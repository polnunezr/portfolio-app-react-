import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Java from '../assets/java.png';
import sql from '../assets/sql.png';
import Vue from '../assets/vue.png';
import Patience from '../assets/patience.png';
import team from '../assets/teamwork.png';
import com from '../assets/communication.png';
import help from '../assets/help.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#806586] text-[#f0f8ff]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#e3b8c6] '>Skills</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] bg-[#b98b94] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='text-[#f0f8ff] my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] bg-[#b98b94]  hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='text-[#f0f8ff] my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] bg-[#b98b94] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='text-[#f0f8ff] my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] bg-[#b98b94]  hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='text-[#f0f8ff] my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] bg-[#b98b94]  hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='text-[#f0f8ff] my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] bg-[#b98b94]  hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Java} alt="HTML icon" />
                  <p className='text-[#f0f8ff] my-4'>JAVA</p>
              </div>
            
              <div className='shadow-md shadow-[#040c16] bg-[#b98b94] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Vue} alt="HTML icon" />
                  <p className='text-[#f0f8ff] my-4'>VUE</p>
              </div>
              <div className='shadow-md shadow-[#040c16] bg-[#b98b94] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={sql} alt="HTML icon" />
                  <p className='text-[#f0f8ff] my-4'>SQL</p>
              </div>
              <div className='shadow-md shadow-[#040c16] bg-[#b98b94] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={com} alt="HTML icon" />
                  <p className='text-[#f0f8ff] my-4'>Communication</p>
              </div>
              <div className='shadow-md shadow-[#040c16] bg-[#b98b94] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={team} alt="HTML icon" />
                  <p className='text-[#f0f8ff] my-4'>Teamwork</p>
              </div>
              <div className='shadow-md shadow-[#040c16] bg-[#b98b94] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={help} alt="HTML icon" />
                  <p className='text-[#f0f8ff] my-4'>Approachability and Helpfulness</p>
              </div>
              <div className='shadow-md shadow-[#040c16] bg-[#b98b94] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Patience} alt="HTML icon" />
                  <p className='text-[#f0f8ff] my-4'>Patience</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
