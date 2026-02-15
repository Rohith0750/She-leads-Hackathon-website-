
import React from 'react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-she-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-she-text">The Organizing Team</h2>
          <p className="text-she-text/70">The passionate students behind InnovateX.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member) => (
            <div key={member.id} className="group">
              <div className="relative mb-4 overflow-hidden rounded-2xl aspect-[4/5]">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-she-primary/20 via-transparent to-transparent opacity-60"></div>
              </div>
              <h3 className="text-xl font-bold text-she-text">{member.name}</h3>
              <p className="text-she-primary font-medium text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
