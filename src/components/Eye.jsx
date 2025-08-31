import React from 'react';

function Eye() {
  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-.8" className=' relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'></div>
        <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '></div>
        <div className='w-[15vw] h-[15vw] bg-zinc-100'></div>
        <div className='w-[15vw] h-[15vw] bg-zinc-100'></div>
    </div>
  );
}

export default Eye;
