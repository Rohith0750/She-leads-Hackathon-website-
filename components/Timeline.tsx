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
    <section id="timeline" className="relative py-32 transition-colors duration-700 bg-she-card/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-she-deepPurple mb-6 uppercase tracking-tighter">Event Journey</h2>
          <p className="text-she-text text-lg font-medium">The 24-hour sprint to build the future.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TIMELINE.map((item) => {
            const [day, month] = item.date.split(' ');
            return (
              <div key={item.id} className="bg-[#f3f4f6] rounded-2xl p-6 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
                {/* Date Badge */}
                <div className="flex flex-col rounded-xl overflow-hidden shadow-sm min-w-[64px] border border-gray-100">
                  <div className="bg-[#0066ff] text-white px-2 py-1.5 flex items-center justify-center font-bold text-xl leading-none">
                    {day}
                  </div>
                  <div className="bg-white text-[#4b5563] px-2 py-1 flex items-center justify-center text-[10px] font-bold uppercase tracking-wider">
                    {month}
                  </div>
                </div>

                {/* Event Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="text-sm font-semibold text-[#374151]">
                      {item.date}, {item.time}
                    </div>
                    {item.status && (
                      <span className="flex items-center gap-1.5 px-2 py-0.5 bg-red-100 text-red-600 text-[10px] font-bold rounded-full animate-pulse border border-red-200 uppercase tracking-tight">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                        {item.status}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-[#111827] leading-tight">
                    {item.event}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
