import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eye from './components/Eye';
import Featured from './components/Featured';
import Cads from './components/Cads';
import Footer from './components/Footer';
 import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();


  return (
    <div className='w-full min-h-screen text-slate-100 bg-zinc-900 '>
      <Navbar />
      <LandingPage />
      <Marquee/>
      <About/>
      <Eye/> 
      <Featured/>
      <Cads />
      <Footer/>
    </div>
  );
}

export default App;
