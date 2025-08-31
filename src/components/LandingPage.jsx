import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-64 px-20 '>
        <div className='masker'>   
            <h1 className='uppercase text-[7vw]  leading-[6vw]  font-["Founders Grotesk_X-Condensed"] font-bold'>We Create</h1>
            <div className='w-fit flex '>
              <motion.div inital={{with:0}} animate={{width:"10vw"}} transition={{ease:[0.76,0,0.24,1],duration: 1}} className=' w-[10vw] h-[5vw] bg-zinc-600 mt-6 rounded	' ></motion.div>
               <h1 className='uppercase text-[7vw]  leading-[7vw]   font-["Founders Grotesk_X-Condensed"] font-bold '>Eye Opening</h1>
            </div>
        </div>
         <div className='masker'>
            <h1 className='uppercase text-[7vw]  leading-[7vw]  font-["Founders Grotesk_X-Condensed"] font-bold'>Presentation</h1>
            </div>
      </div>
        <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20  '>
                {["For public and private companies", "From the first pitch to IPO"].map((item,index)=>
                <p key={index} className='text-md font-light tracking-tight leading-none'>{item}</p>)}
                <div className='start flex items-center gap-5 '>
                    <div className='px-5 py-2 border-[1px] border-zinc-500 font-light font-md uppercase rounded-full '>start the project</div>
                    <div className='w-10 h10 flex items-center justify-center border-[2px] border-zinc-300 rounded-full'>
                        <span className='rotate-[45deg]'><FaArrowUpLong /></span>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default LandingPage;
