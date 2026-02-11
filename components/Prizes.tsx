
import React from 'react';
import { PRIZES } from '../constants';

const Prizes: React.FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Rewards for Innovation</h2>
          <p className="text-slate-400">Cash, hardware, and opportunities await the top builders.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {PRIZES.map((prize, idx) => (
            <div key={prize.id} className={`relative flex flex-col p-8 rounded-3xl bg-slate-800 border-2 border-slate-700 transition-all hover:-translate-y-4 ${idx === 0 ? 'md:order-2 md:scale-110 md:bg-slate-800/80 z-10' : idx === 1 ? 'md:order-1' : 'md:order-3'}`}>
              {idx === 0 && (
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-500 text-black font-black text-xs rounded-full uppercase tracking-tighter shadow-lg">Most Prestigious</div>
              )}
              <h3 className="text-2xl font-black mb-1">{prize.rank}</h3>
              <div className={`text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${prize.color}`}>
                {prize.amount}
              </div>
              <ul className="space-y-4 flex-grow mb-8">
                {prize.perks.map((perk, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-3 text-slate-300 text-sm">
                    <span className="text-blue-500">✓</span> {perk}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-bold transition-all ${idx === 0 ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30' : 'bg-slate-700 hover:bg-slate-600 text-slate-100'}`}>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
