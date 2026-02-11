
import React from 'react';

const Results: React.FC = () => {
  const previousWinners = [
    { year: '2024', team: 'Nexus One', project: 'CleanChain', desc: 'A decentralized waste management tracker.' },
    { year: '2023', team: 'Team Void', project: 'NeuroScan', desc: 'AI-driven rapid eye diagnostic tool.' }
  ];

  return (
    <section className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Wall of Champions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {previousWinners.map((w) => (
            <div key={w.year} className="relative overflow-hidden group rounded-3xl p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
              <div className="absolute top-0 right-0 p-4 text-6xl font-black text-white/5 group-hover:text-blue-500/10 transition-colors">{w.year}</div>
              <div className="relative z-10">
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">Grand Winner</span>
                <h3 className="text-2xl font-bold text-white mb-1">{w.project}</h3>
                <p className="text-blue-400 font-medium mb-4">by {w.team}</p>
                <p className="text-slate-400 leading-relaxed">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
