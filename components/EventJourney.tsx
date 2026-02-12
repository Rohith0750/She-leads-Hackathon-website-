import React, { useEffect, useRef } from 'react';
import { TIMELINE } from '../constants';

const EventJourney: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = canvas.offsetWidth;
        let height = canvas.height = canvas.offsetHeight;

        const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
        const particleCount = 100;
        const connectionDistance = 150;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                r: Math.random() * 2 + 1
            });
        }

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, width, height);

            // Detect dark mode (simple check, or could be passed as prop but this works for canvas logic if we want dynamic)
            const isDark = document.documentElement.classList.contains('dark');

            // Update and draw particles
            ctx.fillStyle = isDark ? '#39ff14' : '#2563eb'; // Neon Green in Dark, Blue in Light
            ctx.strokeStyle = isDark ? 'rgba(37, 99, 235, 0.15)' : 'rgba(37, 99, 235, 0.1)';

            for (let i = 0; i < particles.length; i++) {
                let p = particles[i];

                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();

                // Draw connections
                for (let j = i + 1; j < particles.length; j++) {
                    let p2 = particles[j];
                    let dx = p.x - p2.x;
                    let dy = p.y - p2.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animate);
        };

        const handleResize = () => {
            if (!canvas) return;
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
        };

        window.addEventListener('resize', handleResize);
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section id="event-journey" className="relative py-24 min-h-screen overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-700">

            {/* Dark Mode Gradient Background - Only visible in dark mode */}
            <div className="absolute inset-0 bg-transparent dark:bg-gradient-to-br dark:from-[#020617] dark:via-[#0f172a] dark:to-[#1e1b4b] transition-opacity duration-700"></div>

            {/* Constellation Canvas Background */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" />

            {/* Radial Gradient Overlay for depth */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(255,255,255,0.8)_100%)] dark:bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_100%)] opacity-50"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-24 relative">
                    <h2 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight mb-4 drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(57,255,20,0.3)]">
                        EVENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-she-blue dark:to-[#39ff14]">JOURNEY</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium tracking-wide">
                        The 24-hour sprint to build the future
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative">

                    {/* Central Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-blue-500/50 dark:via-she-blue to-transparent shadow-[0_0_10px_#2563eb]"></div>

                    <div className="space-y-16">
                        {TIMELINE.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={item.id} className={`relative flex items-center ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-0`}>

                                    {/* Spacer */}
                                    <div className="hidden md:block w-1/2" />

                                    {/* Central Node */}
                                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-6 h-6 rounded-full bg-white dark:bg-[#020617] border-2 border-blue-500 dark:border-[#39ff14] shadow-[0_0_15px_rgba(37,99,235,0.4)] dark:shadow-[0_0_15px_#39ff14] z-20 transition-transform duration-300 hover:scale-150">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-white animate-pulse"></div>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-20' : 'md:pl-20'}`}>
                                        <div className="group relative">

                                            {/* Card Glow Border Effect */}
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 dark:from-she-blue dark:to-[#39ff14] rounded-2xl opacity-30 group-hover:opacity-80 blur transition duration-500"></div>

                                            {/* Glass Card Content */}
                                            <div className="relative p-8 rounded-2xl bg-white/80 dark:bg-[#0f172a]/40 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-300 hover:-translate-y-1">

                                                {/* Date/Time Tag & Icon */}
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="text-blue-600 dark:text-[#39ff14] font-bold text-sm tracking-widest uppercase shadow-none dark:shadow-[0_0_10px_rgba(57,255,20,0.2)]">
                                                        {item.date}
                                                    </span>
                                                    <span className="text-2xl filter drop-shadow-md grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-125">
                                                        {item.icon}
                                                    </span>
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 tracking-wide group-hover:text-blue-600 dark:group-hover:text-[#39ff14] transition-colors duration-300">
                                                    {item.event}
                                                </h3>

                                                {/* Description */}
                                                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                                    {item.description}
                                                </p>

                                                {/* Decorative Neon Element */}
                                                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-500 dark:bg-she-blue shadow-[0_0_10px_#2563eb] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Fade */}
                <div className="flex justify-center mt-24">
                    <div className="w-px h-24 bg-gradient-to-b from-blue-500 dark:from-she-blue to-transparent"></div>
                </div>

            </div>
        </section>
    );
};

export default EventJourney;
