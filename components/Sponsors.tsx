import React from 'react';
import { SPONSORS } from '../constants';

const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="py-24 bg-slate-50 dark:bg-[#020617] relative overflow-hidden transition-colors duration-700">
      {/* Background glow similar to reference (Dark Mode Only) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-30 pointer-events-none hidden dark:block">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-she-neon/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-blue-600 dark:text-[#39ff14] tracking-wider uppercase drop-shadow-sm dark:drop-shadow-[0_0_10px_rgba(57,255,20,0.5)] transition-colors">Sponsors</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-blue-600 dark:via-[#39ff14] to-transparent mx-auto transition-colors"></div>
        </div>

        <div className="space-y-20">

          {/* Platform Partner */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-8 tracking-wide transition-colors">Platform Partner</h3>
            <div className="flex flex-col items-center justify-center">
              {SPONSORS.filter(s => s.tier === 'Platform Partner').map(s => (
                <div key={s.id} className="relative group">
                  {/* Card Container */}
                  <div className="relative bg-white dark:bg-[#0a0f1a] border border-slate-200 dark:border-white/10 rounded-2xl p-10 w-[400px] flex flex-col items-center justify-center shadow-xl dark:shadow-2xl transition-all hover:scale-105 duration-300">

                    {/* Corner Dots */}
                    <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-blue-500 dark:bg-[#39ff14] rounded-full shadow-none dark:shadow-[0_0_5px_#39ff14] transition-colors"></div>
                    <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-blue-500 dark:bg-[#39ff14] rounded-full shadow-none dark:shadow-[0_0_5px_#39ff14] transition-colors"></div>

                    {/* Logo/Name */}
                    <h4 className="text-3xl font-bold text-slate-900 dark:text-[#39ff14] mb-3 tracking-widest uppercase drop-shadow-sm dark:drop-shadow-[0_0_5px_rgba(57,255,20,0.5)] transition-colors">
                      {s.name}
                    </h4>

                    {/* Description */}
                    {s.description && (
                      <p className="text-slate-600 dark:text-slate-400 text-sm font-medium tracking-wide text-center transition-colors">
                        {s.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Sponsors;
