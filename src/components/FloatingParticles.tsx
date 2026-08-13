import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationId: number;
    let w = 0;
    let h = 0;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };

    const spawnParticle = (): Particle => ({
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 2 + 0.4,
      speedX: 0.15 + Math.random() * 0.35, // slow wind drift
      speedY: (Math.random() - 0.5) * 0.15, // gentle vertical bob
      opacity: 0,
      life: 0,
      maxLife: Math.random() * 600 + 300,
    });

    const init = () => {
      resize();
      particles = Array.from({ length: 50 }, () => {
        const p = spawnParticle();
        p.life = Math.random() * p.maxLife; // stagger initial life
        return p;
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      // Spawn new particles if needed
      if (particles.length < 40) {
        particles.push(spawnParticle());
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;

        if (p.life > p.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        // Fade in, hold, fade out
        const lifeRatio = p.life / p.maxLife;
        if (lifeRatio < 0.15) {
          p.opacity = lifeRatio / 0.15;
        } else if (lifeRatio > 0.75) {
          p.opacity = (1 - lifeRatio) / 0.25;
        } else {
          p.opacity = 1;
        }

        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;

        const alpha = p.opacity * 0.45;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(225,185,140,${alpha})`;
        ctx.fill();

        // Soft glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,150,95,${alpha * 0.12})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    init();
    window.addEventListener("resize", resize);
    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[3] pointer-events-none"
      aria-hidden="true"
    />
  );
}
