import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  return (
    <div data-scroll data-scroll-section dara-scroll='.1' className='w-full py-6 rounded-tl-3xl rounded-tr-3xl  bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex  overflow-hidden whitespace-nowrap'>
      <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:10}} className='text-[17vw] leading-none  font-["Founders Grotesk_X-Condensed"] uppercase pt-5 -mb-[1vw] -mt-[9vh] font-bold'> We are VArch</motion.h1>
      <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:10}} className='text-[17vw] leading-none  font-["Founders Grotesk_X-Condensed"] uppercase pt-5 -mb-[1vw] -mt-[9vh] font-bold'> We are VArch</motion.h1>
      <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:10}} className='text-[17vw] leading-none  font-["Founders Grotesk_X-Condensed"] uppercase pt-5 -mb-[1vw] -mt-[9vh] font-bold'> We are VArch</motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
