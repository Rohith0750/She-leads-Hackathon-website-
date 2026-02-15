import React from 'react';
import { SPONSORS } from '../constants';

const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="py-24 bg-she-background relative overflow-hidden transition-colors duration-700">

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-she-primary tracking-wider uppercase drop-shadow-sm transition-colors">Sponsors</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-she-primary to-transparent mx-auto transition-colors"></div>
        </div>

        <div className="space-y-20">

          {/* Platform Partner */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-she-text mb-8 tracking-wide transition-colors">Platform Partner</h3>
            <div className="flex flex-col items-center justify-center">
              {SPONSORS.filter(s => s.tier === 'Platform Partner').map(s => (
                <div key={s.id} className="relative group">
                  {/* Card Container */}
                  <div className="relative bg-she-card border border-she-deepPurple/10 rounded-2xl p-10 w-[400px] flex flex-col items-center justify-center shadow-xl transition-all hover:scale-105 duration-300">

                    {/* Corner Dots */}
                    <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-she-accent rounded-full shadow-none transition-colors"></div>
                    <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-she-accent rounded-full shadow-none transition-colors"></div>

                    {/* Logo/Name */}
                    <h4 className="text-3xl font-bold text-she-text mb-3 tracking-widest uppercase drop-shadow-sm transition-colors">
                      {s.name}
                    </h4>

                    {/* Description */}
                    {s.description && (
                      <p className="text-she-text/70 text-sm font-medium tracking-wide text-center transition-colors">
                        {s.description}
                      </p>
                    )}
                  </div>
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
