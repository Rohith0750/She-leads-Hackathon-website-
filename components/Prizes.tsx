
import React from 'react';

// Design tokens for prizes
const prizeData = [
  {
    rank: "2nd Prize",
    amount: "₹20,000",
    description: "Certificate",
    icon: "🥈",
    color: "from-slate-300 to-slate-400", // Silver gradient
    glow: "shadow-slate-400/50",
    border: "border-slate-400",
    order: "order-2 md:order-1", // Mobile: 2nd, Desktop: 1st (Left)
    scale: "scale-100",
    delay: "delay-100"
  },
  {
    rank: "1st Prize",
    amount: "₹30,000",
    description: "Swags + Goodies + Certificate",
    icon: "🥇",
    color: "from-yellow-400 to-orange-500", // Gold gradient
    glow: "shadow-yellow-500/50",
    border: "border-yellow-500",
    order: "order-1 md:order-2", // Mobile: 1st, Desktop: Middle
    scale: "scale-100 md:scale-110 z-10", // Highlighted
    delay: "delay-0"
  },
  {
    rank: "3rd Prize",
    amount: "₹10,000",
    description: "Certificate",
    icon: "🥉",
    color: "from-orange-400 to-red-500", // Bronze gradient
    glow: "shadow-orange-500/50",
    border: "border-orange-500",
    order: "order-3 md:order-3", // Mobile: 3rd, Desktop: Right
    scale: "scale-100",
    delay: "delay-200"
  }
];

const Prizes: React.FC = () => {
  return (
    <section id="prizes" className="relative py-24 md:py-32 transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Total Prize Pool Header */}
        <div className="flex justify-center mb-16 md:mb-24">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-she-blue to-she-neon rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative px-10 py-6 bg-white dark:bg-[#0a0f1a] ring-1 ring-gray-900/5 dark:ring-white/10 rounded-2xl leading-none flex flex-col items-center">
              <span className="text-she-blue dark:text-she-neon text-xs font-black tracking-[0.3em] uppercase mb-2">Total Prize Pool</span>
              <span className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">₹60,000</span>
              <div className="h-1 w-16 bg-gradient-to-r from-she-blue to-she-neon rounded-full mt-4"></div>
            </div>
          </div>
        </div>

        {/* Podium Layout */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-8 md:gap-12 lg:gap-16">
          {prizeData.map((prize, idx) => (
            <div
              key={idx}
              className={`relative group w-full max-w-sm ${prize.order} ${prize.scale} transition-transform duration-500 hover:-translate-y-2`}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-[1px] bg-gradient-to-b ${prize.color} rounded-[2rem] opacity-20 group-hover:opacity-100 blur-sm transition duration-500`}></div>

              {/* Card Content */}
              <div className="relative h-full bg-white dark:bg-[#111827] rounded-[2rem] p-8 flex flex-col items-center border border-slate-100 dark:border-white/5 overflow-hidden shadow-2xl">

                {/* Background Pattern (Subtle dots) */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                  style={{
                    backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}>
                </div>

                {/* Badge/Icon */}
                <div className={`relative w-20 h-20 mb-6 rounded-full bg-gradient-to-br ${prize.color} p-[2px] shadow-lg shadow-black/10 group-hover:scale-110 transition-transform duration-500`}>
                  <div className="w-full h-full bg-white dark:bg-[#111827] rounded-full flex items-center justify-center text-4xl">
                    {prize.icon}
                  </div>
                  {/* Rank Number (absolute badge) */}
                  <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br ${prize.color} flex items-center justify-center text-white text-xs font-bold border-2 border-white dark:border-[#111827]`}>
                    {idx === 1 ? '1' : idx === 0 ? '2' : '3'}
                  </div>
                </div>

                {/* Rank Title */}
                <h3 className={`text-xl font-bold bg-gradient-to-r ${prize.color} bg-clip-text text-transparent uppercase tracking-wider mb-2`}>
                  {prize.rank}
                </h3>

                {/* Icon (Trophy) */}
                <div className="text-4xl my-4 opacity-80 group-hover:scale-110 transition-transform duration-300" style={{ color: idx === 1 ? '#eab308' : idx === 0 ? '#94a3b8' : '#f97316' }}>
                  🏆
                </div>

                {/* Amount */}
                <div className="text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                  {prize.amount}
                </div>

                {/* Description */}
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium text-center mb-8 px-4 leading-relaxed">
                  {prize.description}
                </p>

                {/* Footer / Divider */}
                <div className="w-full mt-auto relative pt-6 border-t border-dashed border-slate-200 dark:border-white/10">
                  <div className="flex items-center justify-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${prize.color}`}></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Winner Takes All</span>
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${prize.color}`}></div>
                  </div>
                </div>

                {/* Bottom Glow Bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${prize.color} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Quote */}
        <div className="text-center mt-20">
          <div className="flex items-center justify-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">
            <span className="w-8 h-[1px] bg-slate-400"></span>
            <span>May the best team win!</span>
            <span className="w-8 h-[1px] bg-slate-400"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
