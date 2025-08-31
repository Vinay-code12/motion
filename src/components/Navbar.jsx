import React from 'react';

function Navbar() {
  return (
    <div className='fixed z[999] w-full px-20 py-8 font-["Neue Montreal"] flex justify-between item-center'>
        <div className='logo'><h1 className='font-regular text-[2vw] font-["Founders_Grotesk"]'>VArch</h1></div>      
        <div className='Link flex gap-10 '>
            {["Services","Our Work","About Us","Insights", "Contact"].map( (item, index) => (
                <a key={index} className={`text-md capitalized font-light ${index === 4 && "ml-32"}`}>{item}</a>
            ))}
        </div>
    </div>
  );
}

export default Navbar;
