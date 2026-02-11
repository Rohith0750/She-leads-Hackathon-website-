
import React from 'react';
import { SPONSORS } from '../constants';

const Sponsors: React.FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Partners</h2>
          <p className="text-slate-400">This event is made possible by our incredible sponsors who support student innovation.</p>
        </div>
        
        <div className="space-y-16">
          {/* Platinum Tier */}
          <div className="text-center">
            <span className="text-xs font-black tracking-widest text-blue-400 uppercase mb-8 block">Platinum Sponsors</span>
            <div className="flex flex-wrap justify-center gap-12">
              {SPONSORS.filter(s => s.tier === 'Platinum').map(s => (
                <div key={s.id} className="w-64 h-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 cursor-pointer">
                  <img src={s.logo} alt={s.name} className="max-h-full" />
                </div>
              ))}
            </div>
          </div>

          {/* Gold Tier */}
          <div className="text-center">
            <span className="text-xs font-black tracking-widest text-slate-400 uppercase mb-8 block">Gold Sponsors</span>
            <div className="flex flex-wrap justify-center gap-10">
              {SPONSORS.filter(s => s.tier === 'Gold').map(s => (
                <div key={s.id} className="w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100 cursor-pointer">
                  <img src={s.logo} alt={s.name} className="max-h-full" />
                </div>
              ))}
            </div>
          </div>

          {/* Silver Tier */}
          <div className="text-center">
             <span className="text-xs font-black tracking-widest text-slate-500 uppercase mb-8 block">Silver Sponsors</span>
            <div className="flex flex-wrap justify-center gap-8">
              {SPONSORS.filter(s => s.tier === 'Silver').map(s => (
                <div key={s.id} className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-40 hover:opacity-100 cursor-pointer">
                  <img src={s.logo} alt={s.name} className="max-h-full" />
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
