import React from 'react';
import { Rocket, Globe } from 'lucide-react';
import sheLeadsLogo from '../assets/logo_sheleads.png';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-she-primary/10 text-she-primary text-xs font-black tracking-widest uppercase mb-6">
              Empowerment Through Code
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-she-text mb-6 md:mb-8 tracking-tighter uppercase">
              What is <span className="text-she-primary normal-case">SheLeads 2.0?</span>
            </h2>
            <div className="space-y-6 text-she-text/80 text-lg md:text-xl leading-relaxed font-medium">
              <p>
                SheLeads 2.0 is more than a hackathon, it’s a platform where women innovate, lead, and build technology with purpose. In 24 hours, ideas turn into solutions, learners become leaders, and future women changemakers rise.
              </p>
              <p>
                As a women-led hackathon, each team is guided by a woman leader, while participants of all genders collaborate to create meaningful impact. We aim to foster an inclusive tech ecosystem where women confidently take the lead in shaping the future through technology.
              </p>
            </div>
            <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div className="p-8 rounded-[2rem] bg-she-card border border-she-deepPurple/5 shadow-sm group hover:border-she-accent/50 transition-colors">
                <Rocket className="w-10 h-10 text-she-primary mb-4" />
                <h3 className="font-black text-she-text text-lg uppercase tracking-tight">Leadership</h3>
                <p className="text-sm text-she-secondaryText">Master the art of tech leadership.</p>
              </div>
              <div className="p-8 rounded-[2rem] bg-she-card border border-she-deepPurple/5 shadow-sm group hover:border-pink-500/50 transition-colors">
                <Globe className="w-10 h-10 text-pink-500 mb-4" />
                <h3 className="font-black text-she-text text-lg uppercase tracking-tight">Impact</h3>
                <p className="text-sm text-she-secondaryText">Solve real-world socio-economic problems.</p>
              </div>
            </div>
          </div>
          <div className="relative group mt-12 md:mt-0 flex justify-center">
            <img
              src={sheLeadsLogo}
              alt="She Leads Logo"
              className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
