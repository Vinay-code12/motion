import React from 'react';

function Cads() {
  return (
    <div className='w-full h-screen bg-white  flex px-32 gap-5 -mb-60'>
     <div className='Carcontainer w-1/2 h-[50vh] py-10 '>
       <div className='card w-full h-full  rounded-xl bg-[#004D43] '>
        </div>
     </div> 
     <div className='Carcontainer flex gap-5 w-1/2 h-[50vh] py-10 '>
      <div className='card w-full h-full  rounded-xl bg-[#192826]'></div>
       <div className='card w-full h-full  rounded-xl bg-[#192826]'></div>
       </div> 
    </div>
  );
}

export default Cads;
