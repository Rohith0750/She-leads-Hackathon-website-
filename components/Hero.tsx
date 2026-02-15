
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-24 transition-colors duration-700">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-she-primary/10 rounded-full blur-[60px] md:blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-she-accent/5 rounded-full blur-[50px] md:blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto w-full">
        <div className="mb-6 md:mb-8">
          <div className="inline-block px-4 py-1 rounded-full border border-she-primary/20 bg-she-primary/5 text-she-primary text-xs md:text-sm font-black tracking-[0.2em] uppercase mb-4 transition-colors duration-700">
            5th and 6th MARCH 2026
          </div>
        </div>

        <div className="relative">
          <h1 className="text-[14vw] md:text-[12rem] font-black font-playfair text-she-text leading-[0.8] tracking-tighter uppercase transition-colors duration-700">
            She <br />
            <span className="text-she-primary">Leads</span>
            <span className="text-black ml-2 md:ml-4 transition-colors duration-700">2.0</span>
          </h1>

          <div className="mt-8 md:mt-16 transform -rotate-1 bg-she-primary px-6 md:px-12 py-3 md:py-6 inline-block shadow-xl border-2 md:border-4 border-white/20 rounded-[2rem] transition-all duration-700">
            <span className="text-xl md:text-5xl font-black text-white italic tracking-tight uppercase">
              Innovate. Empower. Lead.
            </span>
          </div>
        </div>

        <div className="mt-12 md:mt-24 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
          <button className="w-full sm:w-auto px-10 md:px-14 py-4 md:py-6 bg-she-primary hover:bg-she-primaryHover hover:scale-105 active:scale-95 text-white rounded-full font-black text-lg md:text-2xl transition-all shadow-xl shadow-she-primary/30 uppercase tracking-tighter">
            APPLY NOW
          </button>


        </div>
      </div>
    </section>
  );
};

export default Hero;
