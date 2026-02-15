
import React from 'react';

const Results: React.FC = () => {
  const previousWinners = [
    { year: '2024', team: 'Nexus One', project: 'CleanChain', desc: 'A decentralized waste management tracker.' },
    { year: '2023', team: 'Team Void', project: 'NeuroScan', desc: 'AI-driven rapid eye diagnostic tool.' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-she-deepPurple">Wall of Champions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {previousWinners.map((w) => (
            <div key={w.year} className="relative overflow-hidden group rounded-3xl p-8 bg-she-card border border-she-deepPurple/10 hover:shadow-xl transition-shadow duration-300">
              <div className="absolute top-0 right-0 p-4 text-6xl font-black text-she-deepPurple/5 group-hover:text-she-accent/10 transition-colors">{w.year}</div>
              <div className="relative z-10">
                <span className="px-3 py-1 bg-she-primary/20 text-she-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">Grand Winner</span>
                <h3 className="text-2xl font-bold text-she-deepPurple mb-1">{w.project}</h3>
                <p className="text-she-primary font-medium mb-4">by {w.team}</p>
                <p className="text-she-text leading-relaxed">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
