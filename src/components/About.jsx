import React from 'react';

function About() {
  return (
      <div className='w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["Neue Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>
            We craft category-defining presentations, brand 
            identities, and digital experiences that 
            drive funding, sales, and market leadership.
        </h1> 
        <div className='w-full border-t-[1px] pt-10 mt-20 border-[#a1b562]'></div>
        <div className='w-1/2 '>
        <h1 className='text-6xl'>Our Approach: </h1>
        <button className='flex gap-10 items-center uppercase px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>Read More
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
        </button>
        </div>
            <div className='w-1/2  h-[70vh] ml-[48vw] -mt-[11vw] rounded-3xl bg-[#b0c859]'></div>
      </div>
  );
}

export default About;
