
import React from 'react';

const Vision: React.FC = () => {
  const visionPoints = [
    {
      title: "Innovate",
      subtitle: "The Power of Creation",
      description: "Inspiring women changemakers to build impactful real-world tech solutions. We don't just write code; we architect solutions for tomorrow's challenges.",
      icon: "⚡",
      color: "from-she-blue to-blue-400",
      delay: "0"
    },
    {
      title: "Empower",
      subtitle: "The Strength of Growth",
      description: "Helping women confidently innovate, lead, and grow in tech careers. We provide the mentorship, network, and tools necessary to break glass ceilings.",
      icon: "💎",
      color: "from-purple-500 to-she-blue",
      delay: "100"
    },
    {
      title: "Lead",
      subtitle: "The Future of Impact",
      description: "Building an inclusive ecosystem with creativity, leadership, and equal opportunities. Our vision is a world where tech leadership is diverse by default.",
      icon: "👑",
      color: "from-she-neon to-green-400",
      delay: "200"
    }
  ];

  return (
    <section id="vision" className="relative py-24 md:py-32 overflow-hidden bg-white dark:bg-[#0a0f1a] transition-colors duration-700">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 -translate-y-1/2 w-96 h-96 bg-she-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 w-[500px] h-[500px] bg-she-neon/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side: Sticky Content */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <div className="inline-block px-4 py-1 rounded-full border border-she-blue/20 dark:border-she-neon/20 bg-she-blue/5 dark:bg-she-neon/5 text-she-blue dark:text-she-neon text-xs font-black tracking-[0.3em] uppercase mb-6">
              Our North Star
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter uppercase leading-[0.9]">
              The <br />
              <span className="text-she-blue">Vision</span> <br />
              Beyond <br />
              The <span className="text-black dark:text-she-neon">Code</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-sm">
              We're not just hosting a hackathon. We're igniting a movement that reshapes the technological landscape through female-led innovation.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <div className="w-12 h-[2px] bg-she-blue dark:bg-she-neon"></div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">She Leads 2026</span>
            </div>
          </div>

          {/* Right Side: Staggered Bento Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {visionPoints.map((point, index) => (
              <div 
                key={point.title}
                className={`group relative p-1 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 ${
                  index === 1 ? 'md:mt-12' : index === 2 ? 'md:-mt-12 md:col-span-2 md:max-w-[50%] md:mx-auto' : ''
                }`}
              >
                {/* Glow Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${point.color} opacity-10 blur-xl group-hover:opacity-30 transition-opacity rounded-[2.5rem]`}></div>
                
                {/* Main Card Content */}
                <div className="relative h-full p-10 md:p-12 rounded-[2.4rem] bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 backdrop-blur-md overflow-hidden flex flex-col">
                  {/* Floating Icon */}
                  <div className="text-5xl mb-8 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                    {point.icon}
                  </div>
                  
                  <div className="mt-auto">
                    <h4 className="text-xs font-black uppercase tracking-widest text-she-blue dark:text-she-neon mb-2">
                      {point.subtitle}
                    </h4>
                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter">
                      {point.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg font-semibold leading-relaxed">
                      {point.description}
                    </p>
                  </div>

                  {/* Aesthetic Corner Element */}
                  <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${point.color} opacity-5 blur-2xl group-hover:opacity-20 transition-all`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
