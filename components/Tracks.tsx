
import React from 'react';
import { TRACKS } from '../constants';

const Tracks: React.FC = () => {
  return (
    <section id="tracks" className="relative py-32 transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="text-she-neon font-black tracking-widest uppercase text-sm mb-4 italic">Choose Your Battleground</div>
          <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter uppercase">Competition Tracks</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">Focus on high-impact technology areas tailored for women-led innovation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {TRACKS.map((track) => (
            <div key={track.id} className="group p-10 rounded-[2.5rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-she-neon transition-all hover:-translate-y-3 shadow-xl hover:shadow-she-neon/10">
              <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(212,255,0,0.3)]">{track.icon}</div>
              <h3 className="text-2xl font-black mb-4 text-slate-900 dark:text-white uppercase tracking-tight leading-tight">{track.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-semibold text-sm">{track.description}</p>
              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-she-neon font-bold text-xs uppercase tracking-widest">Learn More →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
