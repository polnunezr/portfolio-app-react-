import React, { useState } from 'react';

import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';


const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div name='home' className='w-full h-screen bg-[#806586]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#f0f8ff]'>Hola, el meu nom és</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#f0f8ff]'>
          Pol Núñez Rubio
        </h1>
        <h2 className='text-4xl sm:text-5xl font-bold text-[#f0f8ff]'>
         Desenvolupador d'Aplicacions Web
        </h2>
        <p className='text-[#f0f8ff] py-4 max-w-[700px]'>
          Sóc Desenvolupador d'Aplicacions Web especialitzat en dissenyar , crear i realitzar manteniment a pagines i aplicacions web.
        </p>
        <div>
          
        <Link to='about' onClick={handleClick}  smooth={true} duration={500}> <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-black hover:border-black'>
            Veure Treball
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>

        </div>
      </div>
    </div>
  );
}
;

export default Home;
