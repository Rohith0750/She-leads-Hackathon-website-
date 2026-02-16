import React from 'react';

const Vision: React.FC = () => {
  const visionPoints = [
    {
      title: "Innovate",
      subtitle: "The Power of Creation",
      description: "Inspiring women changemakers to build impactful real-world tech solutions. We don't just write code; we architect solutions for tomorrow's challenges.",
      color: "from-she-primary to-she-accent",
      delay: "0"
    },
    {
      title: "Empower",
      subtitle: "The Strength of Growth",
      description: "Helping women confidently innovate, lead, and grow in tech careers. We provide the mentorship, network, and tools necessary to break glass ceilings.",
      color: "from-she-deepPurple to-she-primary",
      delay: "100"
    },
    {
      title: "Lead",
      subtitle: "The Future of Impact",
      description: "Building an inclusive ecosystem with creativity, leadership, and equal opportunities. Our vision is a world where tech leadership is diverse by default.",
      color: "from-she-accent to-she-lavender",
      delay: "200"
    }
  ];

  return (
    <section id="vision" className="relative py-24 md:py-32 overflow-hidden transition-colors duration-700">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 -translate-y-1/2 w-96 h-96 bg-she-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 w-[500px] h-[500px] bg-she-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left Side: Sticky Content */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <div className="inline-block px-4 py-1 rounded-full border border-she-primary/20 bg-she-primary/5 text-she-primary text-xs font-black tracking-[0.3em] uppercase mb-6">
              Our North Star
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-she-text mb-8 tracking-tighter uppercase leading-[0.9]">
              The <br />
              <span className="text-she-primary">Vision</span> <br />
              Beyond <br />
              The <span className="text-she-primary">Code</span>
            </h2>
            <p className="text-she-text/70 text-lg md:text-xl font-medium leading-relaxed max-w-sm">
              We're not just hosting a hackathon. We're igniting a movement that reshapes the technological landscape through female-led innovation.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <div className="w-12 h-[2px] bg-she-primary"></div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-she-text/50">She Leads 2026</span>
            </div>
          </div>

          {/* Right Side: Professional List/Grid */}
          <div className="lg:w-2/3 flex flex-col gap-6">
            {visionPoints.map((point, index) => (
              <div
                key={point.title}
                className="group relative p-[1px] rounded-3xl transition-all duration-500 hover:scale-[1.01]"
              >
                <div className="relative p-10 bg-she-card border border-she-deepPurple/10 rounded-3xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-she-deepPurple/10">
                  {/* Number Watermark */}
                  <div className="absolute top-0 right-0 p-8 opacity-5 font-black text-8xl text-she-text pointer-events-none font-sans group-hover:opacity-10 transition-opacity">
                    0{index + 1}
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
                    {/* Accent Line */}
                    <div className={`w-1 h-16 md:h-24 bg-gradient-to-b ${point.color} rounded-full`}></div>

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-she-text/60 mb-2">
                        {point.subtitle}
                      </h4>
                      <h3 className="text-3xl md:text-4xl font-black text-she-text mb-4 uppercase tracking-tight">
                        {point.title}
                      </h3>
                      <p className="text-she-text/80 text-lg leading-relaxed max-w-2xl">
                        {point.description}
                      </p>
                    </div>
                  </div>
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
