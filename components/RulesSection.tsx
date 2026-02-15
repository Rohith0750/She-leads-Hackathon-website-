
import React from 'react';

const RulesSection: React.FC = () => {
  const rules = [
    "Open to all women identifying students and recent graduates.",
    "Maximum team size is 4. Individual entries are welcome.",
    "Projects must be original and built during the hacking period.",
    "Use of AI and open-source tools is encouraged.",
    "Inclusive and supportive environment for all skill levels.",
    "Submissions must be made via the official portal by March 6th."
  ];

  return (
    <section className="py-24 bg-she-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-she-card p-10 rounded-[3rem] border border-she-deepPurple/10 shadow-xl">
          <h2 className="text-3xl font-black mb-8 text-center flex items-center justify-center gap-3 text-she-deepPurple uppercase tracking-tighter">
            ⚖️ Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rules.map((rule, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="bg-she-primary text-white rounded-lg h-6 w-6 flex items-center justify-center flex-shrink-0 text-xs font-black mt-1">
                  {idx + 1}
                </div>
                <p className="text-she-text text-sm font-semibold leading-relaxed">{rule}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 rounded-2xl bg-she-primary/5 border border-she-primary/10">
            <p className="text-she-primary text-sm font-bold italic">
              * By participating, you agree to our community standards and code of conduct.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
