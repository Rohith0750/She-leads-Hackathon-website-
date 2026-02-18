
import React from 'react';
import pptFile from '../assets/SheLeads_2.0_ppt_template.pptx';

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
          <div className="inline-block [transform:rotateZ(-1.5deg)] origin-bottom-left">
            <h1 className="text-[14vw] md:text-[12rem] font-black font-playfair text-she-text leading-[0.8] tracking-tighter uppercase transition-colors duration-700">
              She <br />
              <span className="text-she-primary">Leads</span>
              <span className="text-black ml-2 md:ml-4 transition-colors duration-700">2.0</span>
            </h1>
          </div>

          <div className="relative left-10 md:left-28 lg:left-36 mt-1 md:mt-2 [transform:rotateZ(-4.0deg)] bg-she-primary px-3 py-1.5 md:px-12 md:py-6 inline-block shadow-xl border-2 md:border-4 border-white/20 rounded-[2rem] transition-all duration-700">
            <span className="text-sm md:text-5xl font-black text-white italic tracking-tight uppercase whitespace-pre">
              Innovate     Empower    Lead
            </span>
          </div>
        </div>

        <div className="mt-12 md:mt-24 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
          <a
            href="https://unstop.com/hackathons/sheleads-20-presideny-university-bangalore-1642567"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 md:px-14 py-4 md:py-6 bg-she-primary hover:bg-she-primaryHover hover:scale-105 active:scale-95 text-white rounded-full font-black text-lg md:text-2xl transition-all shadow-xl shadow-she-primary/30 uppercase tracking-tighter inline-block text-center"
          >
            APPLY NOW
          </a>

          <a
            href={pptFile}
            download="SheLeads_2.0_ppt_Template.pptx"
            className="w-full sm:w-auto px-10 md:px-14 py-4 md:py-6 bg-white text-she-primary border-4 border-she-primary/20 hover:border-she-primary hover:bg-she-primary/5 hover:scale-105 active:scale-95 rounded-full font-black text-lg md:text-2xl transition-all shadow-xl shadow-she-primary/10 uppercase tracking-tighter flex items-center justify-center gap-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PPT
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
