
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-she-background transition-colors duration-700">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-she-text mb-16 text-center uppercase tracking-tighter">
          Frequently Answered <span className="text-she-navbar">Questions</span>
        </h2>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={faq.id}
              className={`group bg-she-card border transition-all duration-300 rounded-2xl overflow-hidden ${openIdx === idx
                ? 'border-she-navbar shadow-lg ring-1 ring-she-navbar/20'
                : 'border-slate-200 hover:border-she-navbar'
                }`}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full px-6 py-5 md:px-8 md:py-6 text-left flex items-center justify-between transition-colors focus:outline-none"
                aria-expanded={openIdx === idx}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${openIdx === idx ? 'text-she-navbar' : 'text-she-text group-hover:text-she-navbar'
                    }`}>
                    {faq.question}
                  </span>
                </div>

                <div className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openIdx === idx ? 'bg-she-navbar/20 rotate-45' : 'bg-slate-100 group-hover:bg-she-navbar/10'
                  }`}>
                  <svg
                    className={`w-4 h-4 transition-colors duration-300 ${openIdx === idx ? 'text-she-navbar' : 'text-slate-400 group-hover:text-she-navbar'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openIdx === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
                    <div className="h-px w-full bg-slate-100 mb-4"></div>
                    <p className="text-she-text/70 text-base md:text-lg font-medium leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
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
