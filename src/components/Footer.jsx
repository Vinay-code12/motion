import React from 'react';
import img from '../assets/oa.png';

function Footer() {
  return (
    <div className='w-full flex gap-5 h-screen bg-zinc-900 p-20 font-["Founder Grotesk"]'>
      <div className='w-1/2 '>
      <div className='heading'>
         <h1 className='text-[8vw] uppercase font-semibold leading-none -mb-10' >Eye-</h1>
      <h1 className='text-[8vw] uppercase font-semibold leading-none -mb-10'>Opening</h1>
      </div>
      </div>
      <div className='w-1/2'>
         <h1 className='text-[5vw] uppercase font-semibold leading-none -mb-10' >Presentations</h1></div>
    </div>
  );
}

export default Footer;
