
import React from 'react';

const Hero = () => (
  <div
    className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black"
  >
    <div className="absolute inset-0 bg-black z-0"></div>

    <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center max-w-6xl mx-auto">
      <h1 className="font-montserrat text-7xl md:text-9xl font-extrabold text-white mb-6 tracking-tight leading-none">
        <span className="block">DARPAN</span>
      </h1>
      
      <p className="mt-6 font-poppins text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
        The spectacle of nukkad - Thapar Nautanki Team presents the most awaited nukkad natak
      </p>
      
      <div className="mt-10">
        <a 
          href="#darpan" 
          className="bg-funky-orange hover:bg-funky-orange/90 text-white font-poppins font-semibold px-8 py-4 rounded-full text-lg transition-all flex items-center gap-2 shadow-lg hover:shadow-funky-orange/20 hover:-translate-y-1"
        >
          Discover More
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </a>
      </div>
      
      <div className="mt-16 grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8">
        {[
          { color: "bg-funky-orange", icon: "T" },
          { color: "bg-funky-yellow", icon: "N" },
          { color: "bg-funky-blue", icon: "T" },
        ].map((item, index) => (
          <div 
            key={index} 
            className={`${item.color} w-16 h-16 md:w-24 md:h-24 rounded-2xl flex items-center justify-center text-white text-3xl md:text-4xl font-bold shadow-lg`}
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Hero;
