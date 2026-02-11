
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50/80 backdrop-blur-sm dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded bg-she-blue/10 text-she-blue dark:text-blue-400 text-xs font-black tracking-widest uppercase mb-6">
              Empowerment Through Code
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 md:mb-8 tracking-tighter uppercase">
              What is <span className="text-she-blue">She Leads 2.0?</span>
            </h2>
            <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
              <p>
                SheLeads 2.0 is more than a hackathon, it’s a platform where women innovate, lead, and build technology with purpose. In 24 hours, ideas turn into solutions, learners become leaders, and future women changemakers rise.
              </p>
              <p>
                We aim to create an inclusive tech ecosystem where every woman is empowered to innovate, lead, and shape the future through technology.
              </p>
            </div>
            <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div className="p-8 rounded-[2rem] bg-white dark:bg-[#0a0f1a] border border-slate-200 dark:border-white/10 shadow-sm">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-black text-slate-900 dark:text-white text-lg uppercase tracking-tight">Leadership</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Master the art of tech leadership.</p>
              </div>
              <div className="p-8 rounded-[2rem] bg-white dark:bg-[#0a0f1a] border border-slate-200 dark:border-white/10 shadow-sm">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="font-black text-slate-900 dark:text-white text-lg uppercase tracking-tight">Impact</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Solve real-world socio-economic problems.</p>
              </div>
            </div>
          </div>
          <div className="relative group mt-12 md:mt-0">
            <div className="absolute -inset-4 bg-she-neon/20 rounded-[4rem] blur-2xl group-hover:bg-she-neon/30 transition-all"></div>
            <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden border-4 md:border-8 border-white dark:border-white/5 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="Women in tech" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute -bottom-6 md:-bottom-8 -right-4 md:-right-8 p-6 md:p-10 bg-she-blue rounded-[2rem] md:rounded-[2.5rem] shadow-2xl transform rotate-2">
              <div className="text-3xl md:text-5xl font-black text-white mb-1 tracking-tighter">5-6</div>
              <div className="text-blue-100 font-bold uppercase tracking-widest text-xs md:text-base whitespace-nowrap">MARCH 2026</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
