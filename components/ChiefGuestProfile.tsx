
import React from 'react';

const ChiefGuestProfile: React.FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative glass p-1 rounded-3xl overflow-hidden shadow-2xl">
          <div className="bg-slate-900 rounded-[calc(1.5rem-1px)] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-2xl overflow-hidden border-4 border-blue-500/20">
              <img src="https://picsum.photos/400/400?random=30" alt="Chief Guest" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="inline-block mb-3 text-blue-400 font-bold uppercase tracking-widest text-xs">Chief Guest Speaker</div>
              <h2 className="text-4xl font-bold mb-4 text-white">Dr. Aris Thorne</h2>
              <p className="text-xl text-slate-300 mb-6 italic">"The future isn't predicted, it's compiled by those who dare to build."</p>
              <div className="text-slate-400 mb-8 space-y-4">
                <p>Formerly the Chief Architect at QuantumStream, Dr. Thorne has spent two decades pioneering decentralized systems and neural computing. They will be delivering the opening keynote on 'The Ethical Frontier of AI'.</p>
              </div>
              <div className="flex gap-4">
                 <span className="px-3 py-1 bg-slate-800 rounded-lg text-sm text-slate-300">OpenAI Research</span>
                 <span className="px-3 py-1 bg-slate-800 rounded-lg text-sm text-slate-300">PhD MIT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiefGuestProfile;
