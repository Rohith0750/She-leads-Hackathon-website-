
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 md:py-20 bg-white dark:bg-[#0a0f1a] border-t border-slate-100 dark:border-white/5">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-center">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-she-neon dark:bg-she-neon bg-she-blue dark:bg-she-neon flex items-center justify-center text-white dark:text-black font-black text-2xl shadow-lg">S</div>
              <span className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
                She Leads <span className="text-she-blue">2.0</span>
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-widest italic">Innovate. Empower. Lead.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-slate-500 dark:text-slate-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-she-blue dark:hover:text-she-neon transition-colors">Privacy</a>
            <a href="#" className="hover:text-she-blue dark:hover:text-she-neon transition-colors">Code of Conduct</a>
            <a href="#" className="hover:text-she-blue dark:hover:text-she-neon transition-colors">Contact</a>
          </div>

          <div className="flex justify-center md:justify-end gap-4 md:gap-6">
            {['𝕏', '📸', '🐙', '💼'].map((social, i) => (
              <a key={i} href="#" className="w-12 h-12 md:w-14 md:h-14 rounded-2xl md:rounded-[1.5rem] bg-slate-50 dark:bg-white/5 flex items-center justify-center hover:bg-she-blue dark:hover:bg-she-neon hover:text-white dark:hover:text-black transition-all text-xl md:text-2xl border border-transparent transform hover:-translate-y-2">
                {social}
              </a>
            ))}
          </div>
        </div>
        <div className="text-center mt-12 md:mt-20 pt-10 border-t border-slate-100 dark:border-white/5 text-slate-400 dark:text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">
          &copy; 2026 She Leads Hackathon. Distributed by She Leads Community.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
