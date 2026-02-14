import React from 'react';
import { TIMELINE } from '../constants';
import { ClipboardList, Lightbulb, Megaphone, Rocket, Trophy } from 'lucide-react';

const icons = [
  <ClipboardList size={20} />,
  <Lightbulb size={20} />,
  <Megaphone size={20} />,
  <Rocket size={20} />,
  <Trophy size={20} />
];

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="relative py-32 transition-colors duration-700">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter">Event Journey</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">The 24-hour sprint to build the future.</p>
        </div>
        <div className="relative space-y-12 before:absolute before:left-6 md:before:left-1/2 before:w-1 before:h-full before:bg-gradient-to-b before:from-she-blue before:to-she-neon before:opacity-20 before:-translate-x-1/2">
          {TIMELINE.map((item, idx) => (
            <div key={item.id} className={`relative flex items-center justify-between md:justify-normal gap-10 w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="hidden md:block w-1/2"></div>

              {/* Center Icon Node */}
              <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0a0f1a] border-4 ${idx % 2 === 0 ? 'border-she-blue shadow-[0_0_15px_rgba(37,99,235,0.4)] text-she-blue' : 'border-she-neon shadow-[0_0_15px_rgba(212,255,0,0.4)] text-she-neon'} z-10 flex items-center justify-center`}>
                {icons[idx] || <Lightbulb size={20} />}
              </div>

              <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${idx % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-she-neon transition-colors group">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-she-blue dark:text-she-neon font-black text-sm uppercase tracking-widest bg-she-blue/5 px-3 py-1 rounded-lg">
                      {item.date} • {item.time}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 uppercase tracking-tight">{item.event}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-base font-semibold leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
