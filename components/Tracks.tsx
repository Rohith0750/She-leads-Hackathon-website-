
import React, { useState } from 'react';
import { TRACKS } from '../constants';
import { Accessibility, ShieldCheck, Sprout, Sparkles, CreditCard, X, ArrowRight, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'accessibility': <Accessibility className="w-full h-full" />,
  'shield-check': <ShieldCheck className="w-full h-full" />,
  'sprout': <Sprout className="w-full h-full" />,
  'sparkles': <Sparkles className="w-full h-full" />,
  'credit-card': <CreditCard className="w-full h-full" />,
};

const colorMap: Record<string, string> = {
  'cyan': 'group-hover:shadow-cyan-500/50 group-hover:border-cyan-500/50 text-cyan-400',
  'purple': 'group-hover:shadow-purple-500/50 group-hover:border-purple-500/50 text-purple-400',
  'green': 'group-hover:shadow-green-500/50 group-hover:border-green-500/50 text-green-400',
  'pink': 'group-hover:shadow-pink-500/50 group-hover:border-pink-500/50 text-pink-400',
  'yellow': 'group-hover:shadow-yellow-500/50 group-hover:border-yellow-500/50 text-yellow-400',
};

const bgGlowMap: Record<string, string> = {
  'cyan': 'bg-cyan-500/20',
  'purple': 'bg-purple-500/20',
  'green': 'bg-green-500/20',
  'pink': 'bg-pink-500/20',
  'yellow': 'bg-yellow-500/20',
};

const Tracks: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState<number | null>(null);

  return (
    <section id="tracks" className="relative py-20 lg:py-32 transition-colors duration-700 overflow-hidden">

      {/* Modal/Overlay for Active Track */}
      {activeTrack !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setActiveTrack(null)}
          ></div>
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button
              onClick={() => setActiveTrack(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="grid md:grid-cols-2">
              <div className={`p-8 md:p-12 ${bgGlowMap[TRACKS.find(t => t.id === activeTrack)?.themeColor || 'cyan']} flex items-center justify-center`}>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                    {iconMap[TRACKS.find(t => t.id === activeTrack)?.iconName || 'sparkles']}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-2">
                    {TRACKS.find(t => t.id === activeTrack)?.title}
                  </h3>
                  <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold tracking-widest uppercase">
                    Theme Track
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12 bg-slate-950">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="text-she-neon" size={20} />
                  About this Track
                </h4>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  {TRACKS.find(t => t.id === activeTrack)?.fullDescription}
                </p>

                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-she-neon" size={20} />
                  Sub-Tracks
                </h4>
                <ul className="space-y-3">
                  {TRACKS.find(t => t.id === activeTrack)?.subTracks.map((sub, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-she-neon shrink-0"></div>
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="text-she-neon font-black tracking-widest uppercase text-sm mb-4 italic">Choose Your Battleground</div>
          <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter uppercase">Competition Tracks</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">Focus on high-impact technology areas tailored for women-led innovation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {TRACKS.map((track) => (
            <div
              key={track.id}
              className={`group relative p-8 rounded-[2.5rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${colorMap[track.themeColor]} flex flex-col h-full`}
            >
              <div className="mb-6 w-16 h-16 p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500 group-hover:bg-white/10">
                {iconMap[track.iconName]}
              </div>

              <h3 className="text-2xl font-black mb-3 text-slate-900 dark:text-white uppercase tracking-tight leading-tight group-hover:text-blue-600 dark:group-hover:text-she-neon transition-colors">
                {track.title}
              </h3>

              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium text-sm mb-8 flex-grow">
                {track.shortDescription}
              </p>

              <div className="mt-auto pt-6 border-t border-slate-200 dark:border-white/5">
                <button
                  onClick={() => setActiveTrack(track.id)}
                  className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-she-neon transition-colors"
                >
                  Explore Track <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
