import React from 'react';
import { Rocket, Globe } from 'lucide-react';
import sheLeadsLogo from '../assets/logo_sheleads.png';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-she-primary/10 text-she-primary text-xs font-black tracking-widest uppercase mb-6">
              Empowerment Through Code
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-she-text mb-6 md:mb-8 tracking-tighter uppercase">
              What is <span className="text-she-primary">She Leads 2.0?</span>
            </h2>
            <div className="space-y-6 text-she-text/80 text-lg md:text-xl leading-relaxed font-medium">
              <p>
                SheLeads 2.0 is more than a hackathon, it’s a platform where women innovate, lead, and build technology with purpose. In 24 hours, ideas turn into solutions, learners become leaders, and future women changemakers rise.
              </p>
              <p>
                We aim to create an inclusive tech ecosystem where every woman is empowered to innovate, lead, and shape the future through technology.
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
          <div className="relative group mt-12 md:mt-0">
            <div className="absolute -inset-4 bg-she-accent/20 rounded-[4rem] blur-2xl group-hover:bg-she-accent/30 transition-all"></div>
            <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden border-4 md:border-8 border-white shadow-2xl bg-gradient-to-br from-she-accent/20 via-she-primary to-she-primary/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={sheLeadsLogo} alt="She Leads Logo" className="w-48 h-48 md:w-80 md:h-80 object-contain drop-shadow-2xl bg-white rounded-3xl p-6" />
              </div>
            </div>
            <div className="absolute -bottom-6 md:-bottom-8 -right-4 md:-right-8 p-6 md:p-10 bg-she-primary rounded-[2rem] md:rounded-[2.5rem] shadow-2xl transform rotate-2">
              <div className="text-3xl md:text-5xl font-black text-white mb-1 tracking-tighter">5-6</div>
              <div className="text-white/80 font-bold uppercase tracking-widest text-xs md:text-base whitespace-nowrap">MARCH 2026</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
