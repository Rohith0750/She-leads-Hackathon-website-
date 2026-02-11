
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#0a0f1a] pt-24 transition-colors duration-700">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-she-blue/10 rounded-full blur-[60px] md:blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-she-neon/5 rounded-full blur-[50px] md:blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto w-full">
        <div className="mb-6 md:mb-8">
          <div className="inline-block px-4 py-1 rounded-full border border-she-blue/20 dark:border-she-neon/20 bg-she-blue/5 dark:bg-she-neon/5 text-she-blue dark:text-she-neon text-xs md:text-sm font-black tracking-[0.2em] uppercase mb-4 transition-colors duration-700">
            5th and 6th MARCH 2026
          </div>
        </div>

        <div className="relative">
          <h1 className="text-[14vw] md:text-[12rem] font-black text-slate-900 dark:text-white leading-[0.8] tracking-tighter uppercase transition-colors duration-700">
            She <br />
            <span className="text-she-blue">Leads</span> 
            <span className="text-black dark:text-she-neon ml-2 md:ml-4 transition-colors duration-700">2.0</span>
          </h1>
          
          <div className="mt-8 md:mt-16 transform -rotate-1 bg-she-blue px-6 md:px-12 py-3 md:py-6 inline-block shadow-2xl border-2 md:border-4 border-slate-100 dark:border-white/10 rounded-xl md:rounded-3xl transition-all duration-700">
            <span className="text-xl md:text-5xl font-black text-white italic tracking-tight uppercase">
              Innovate. Empower. Lead.
            </span>
          </div>
        </div>

        <div className="mt-12 md:mt-24 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
          <button className="w-full sm:w-auto px-10 md:px-14 py-4 md:py-6 bg-she-blue dark:bg-she-neon hover:scale-105 active:scale-95 text-white dark:text-black rounded-xl md:rounded-3xl font-black text-lg md:text-2xl transition-all shadow-2xl shadow-she-blue/30 dark:shadow-she-neon/30 uppercase tracking-tighter">
            APPLY NOW
          </button>
          
          <div className="flex items-center gap-4 md:gap-8 p-3 md:p-5 rounded-2xl md:rounded-[2.5rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm transition-all duration-700 w-full sm:w-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-she-blue/20 dark:bg-she-neon/20 blur-xl rounded-full"></div>
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=SheLeads" 
                alt="Mascot" 
                className="relative w-12 h-12 md:w-20 md:h-20"
              />
            </div>
            <div className="text-left">
              <p className="font-black text-slate-900 dark:text-white text-base md:text-xl leading-tight uppercase tracking-tight transition-colors duration-700">Limited Spots!</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs md:text-base font-bold transition-colors duration-700">Join 500+ developers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
