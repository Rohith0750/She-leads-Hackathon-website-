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

            // Fixed colors for She Leads theme
            ctx.fillStyle = '#7B3FF2'; // she-primary
            ctx.strokeStyle = 'rgba(123, 63, 242, 0.2)'; // she-primary with opacity

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
        <section id="event-journey" className="relative py-24 min-h-screen overflow-hidden bg-she-background transition-colors duration-700">

            {/* Constellation Canvas Background */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" />

            {/* Radial Gradient Overlay for depth */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_#FFFFFF_100%)] opacity-50"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-24 relative">
                    <h2 className="text-5xl md:text-7xl font-bold text-she-text tracking-tight mb-4 drop-shadow-sm">
                        EVENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-she-deepPurple to-she-primary">JOURNEY</span>
                    </h2>
                    <p className="text-she-text/70 text-lg md:text-xl font-medium tracking-wide">
                        The 24-hour sprint to build the future
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative">

                    {/* Central Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-she-primary/30 to-transparent shadow-[0_0_10px_rgba(123,63,242,0.2)]"></div>

                    <div className="space-y-16">
                        {TIMELINE.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={item.id} className={`relative flex items-center ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-0`}>

                                    {/* Spacer */}
                                    <div className="hidden md:block w-1/2" />

                                    {/* Central Node */}
                                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-6 h-6 rounded-full bg-she-background border-2 border-she-primary shadow-[0_0_15px_rgba(123,63,242,0.4)] z-20 transition-transform duration-300 hover:scale-150">
                                        <div className="w-1.5 h-1.5 rounded-full bg-she-primary animate-pulse"></div>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-20' : 'md:pl-20'}`}>
                                        <div className="group relative">

                                            {/* Card Glow Border Effect */}
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-she-primary to-she-accent rounded-2xl opacity-30 group-hover:opacity-80 blur transition duration-500"></div>

                                            {/* Glass Card Content */}
                                            <div className="relative p-8 rounded-2xl bg-she-card/80 backdrop-blur-md border border-she-deepPurple/10 shadow-lg hover:shadow-[0_0_30px_rgba(123,63,242,0.1)] transition-all duration-300 hover:-translate-y-1">

                                                {/* Date/Time Tag & Icon */}
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="text-she-primary font-bold text-sm tracking-widest uppercase">
                                                        {item.date}
                                                    </span>
                                                    <span className="text-2xl filter drop-shadow-md grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-125">
                                                        {item.icon}
                                                    </span>
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-2xl font-bold text-she-text mb-3 tracking-wide group-hover:text-she-primary transition-colors duration-300">
                                                    {item.event}
                                                </h3>

                                                {/* Description */}
                                                <p className="text-she-text/70 font-light leading-relaxed">
                                                    {item.description}
                                                </p>

                                                {/* Decorative Neon Element */}
                                                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-she-accent shadow-[0_0_10px_rgba(255,107,157,0.4)] opacity-0 group-hover:opacity-100 transition-opacity"></div>

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
                    <div className="w-px h-24 bg-gradient-to-b from-she-primary/30 to-transparent"></div>
                </div>

            </div>
        </section>
    );
};

export default EventJourney;
