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
          <h2 className="text-5xl font-black text-she-deepPurple mb-6 uppercase tracking-tighter">Event Journey</h2>
          <p className="text-she-text text-lg font-medium">The 24-hour sprint to build the future.</p>
        </div>
        <div className="relative space-y-12 before:absolute before:left-6 md:before:left-1/2 before:w-1 before:h-full before:bg-gradient-to-b before:from-she-primary before:to-she-accent before:opacity-20 before:-translate-x-1/2">
          {TIMELINE.map((item, idx) => (
            <div key={item.id} className={`relative flex items-center justify-between md:justify-normal gap-10 w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="hidden md:block w-1/2"></div>

              {/* Center Icon Node */}
              <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#FFFFFF] border-4 ${idx % 2 === 0 ? 'border-she-primary shadow-[0_0_15px_rgba(123,63,242,0.4)] text-she-primary' : 'border-she-accent shadow-[0_0_15px_rgba(255,107,157,0.4)] text-she-accent'} z-10 flex items-center justify-center`}>
                {icons[idx] || <Lightbulb size={20} />}
              </div>

              <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${idx % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                <div className="bg-she-card p-8 rounded-3xl border border-she-deepPurple/5 hover:border-she-accent transition-colors group">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-she-primary font-black text-sm uppercase tracking-widest bg-she-primary/5 px-3 py-1 rounded-lg">
                      {item.date} • {item.time}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-she-deepPurple mb-3 uppercase tracking-tight">{item.event}</h3>
                  <p className="text-she-text text-base font-semibold leading-relaxed">{item.description}</p>
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
