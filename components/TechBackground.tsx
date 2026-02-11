
import React, { useEffect, useRef } from 'react';

interface TechBackgroundProps {
    darkMode: boolean;
}

class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    width: number;
    height: number;
    originalX: number;
    originalY: number;

    constructor(width: number, height: number, color: string) {
        this.width = width;
        this.height = height;
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5; // Slow, smooth movement
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1; // Varied sizes (1-3px)
        this.color = color;
        this.originalX = this.x;
        this.originalY = this.y;
    }

    update(mouseX: number | null, mouseY: number | null) {
        // Basic movement
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x < 0 || this.x > this.width) this.vx *= -1;
        if (this.y < 0 || this.y > this.height) this.vy *= -1;

        // Mouse interaction (gentle repulsion)
        if (mouseX !== null && mouseY !== null) {
            const dx = mouseX - this.x;
            const dy = mouseY - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 150;

            if (distance < maxDistance) {
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const force = (maxDistance - distance) / maxDistance;
                const repulsionStrength = 2; // Subtle push

                this.vx -= forceDirectionX * force * 0.05 * repulsionStrength;
                this.vy -= forceDirectionY * force * 0.05 * repulsionStrength;
            }
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

const TechBackground: React.FC<TechBackgroundProps> = ({ darkMode }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let connectionsOpacityMultiplier = darkMode ? 0.2 : 0.15; // Faint lines

        const init = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Re-initialize particles
            particles = [];
            const particleCount = Math.floor((canvas.width * canvas.height) / 12000); // Responsive density

            const color = darkMode ? 'rgba(212, 255, 0, 0.6)' : 'rgba(37, 99, 235, 0.6)'; // she-neon vs she-blue base for particles

            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(canvas.width, canvas.height, color));
            }
        };

        const render = () => {
            // Clear canvas with gradient background
            if (darkMode) {
                const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
                gradient.addColorStop(0, '#020617'); // slate-950
                gradient.addColorStop(1, '#0f172a'); // slate-900
                ctx.fillStyle = gradient;
            } else {
                const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
                gradient.addColorStop(0, '#f8fafc'); // slate-50
                gradient.addColorStop(1, '#e2e8f0'); // slate-200
                ctx.fillStyle = gradient;
            }
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Update and Draw Particles
            particles.forEach((particle, index) => {
                particle.update(mouseRef.current.x, mouseRef.current.y);
                particle.draw(ctx);

                // Draw Connections
                for (let j = index + 1; j < particles.length; j++) {
                    const other = particles[j];
                    const dx = particle.x - other.x;
                    const dy = particle.y - other.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const connectDistance = 120; // Max connection distance

                    if (distance < connectDistance) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(other.x, other.y);

                        // Fading opacity based on distance
                        const opacity = (1 - distance / connectDistance) * connectionsOpacityMultiplier;
                        ctx.strokeStyle = darkMode
                            ? `rgba(212, 255, 0, ${opacity})` // she-neon lines
                            : `rgba(37, 99, 235, ${opacity})`; // she-blue lines

                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(render);
        };

        init();
        render();

        const handleResize = () => {
            init();
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: null, y: null };
        }

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, [darkMode]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 w-full h-full pointer-events-none"
        />
    );
};

export default TechBackground;
