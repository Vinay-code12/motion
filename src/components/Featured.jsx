import { motion, useAnimation } from 'framer-motion';
import React from 'react';

function Featured() {   

  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index)=>{
    cards[index].start({y:"0"});
  };

  const handleHoverEnd = (index) => {
    cards[index].start({y:"100%"});
  };

  return (
    <div className='w-full py-20'>
       <div className='w-full px-20 border-b-[1px] border-zinc-700 p-20'>
        <h1 className='text-8xl font["Neue_Montreal"] tracking-tight'>Featured projects</h1>
        </div>
        <div className='px-20'>
            <div className='cards w-full flex gap-10 mt-10'>
            <motion.div onHoverStart={()=>handleHover(0)} 
             onHoverEnd={()=>handleHoverEnd(0)}
            className='cardcontainer  relative w-1/2 h-[75vh] '>
            <h1 className='absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-6xl font-bold font-["Founders Grotesk"] '>{"Salience Labs".split('').flatMap((item, index)=>
            <motion.span initial={{y:"100%"}} animate={cards[0]} ransition={{ease:[0.22,1,0.36,1],dealy: index*.05}}>{item}</motion.span>)}</h1>
            <div className=' card w-full h-full rounded-xl overflow-hidden '>
                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png" alt="" />
            </div>
            </motion.div>
            <motion.div
            onHoverStart={()=>handleHover(1)} 
             onHoverEnd={()=>handleHoverEnd(1)} 
             className='cardcontainer relative w-1/2 h-[75vh] '>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
                 <h1 className='absolute  flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-6xl font-bold font-["Founders Grotesk"] '>{"Medallia Experience".split('').flatMap((item, index)=>
                 <motion.span initial={{y:"100%"}} animate={cards[1]} ransition={{ease:[0.22,1,0.36,1],dealy: index*.05}} class='inline-block'>{item}</motion.span>)}</h1>
                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png" alt="" />
            </div></motion.div>
        </div>
        </div>
    </div>
  );
}

export default Featured;
