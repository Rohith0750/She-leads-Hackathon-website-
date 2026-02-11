
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-16 text-center uppercase tracking-tighter">Everything You Need To Know</h2>
        <div className="space-y-6">
          {FAQS.map((faq, idx) => (
            <div key={faq.id} className={`bg-white dark:bg-[#0a0f1a] border-2 transition-all rounded-[2rem] overflow-hidden ${openIdx === idx ? 'border-she-neon shadow-[0_0_20px_rgba(212,255,0,0.1)]' : 'border-slate-200 dark:border-white/5'}`}>
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-10 py-8 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
              >
                <span className={`font-black text-xl uppercase tracking-tight ${openIdx === idx ? 'text-she-neon' : 'text-slate-900 dark:text-white'}`}>
                  {faq.question}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${openIdx === idx ? 'bg-she-neon text-black rotate-45' : 'bg-slate-100 dark:bg-white/5 text-slate-400'}`}>
                  <span className="text-2xl font-bold">+</span>
                </div>
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openIdx === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-10 pb-10 text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed border-t border-slate-100 dark:border-white/5 pt-6">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
