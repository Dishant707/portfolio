import { Dna, Microscope, Code2, Database, BarChart3, Globe } from "lucide-react";
import { motion } from "motion/react";
import FloatingParticles from "./FloatingParticles";

const skills = [
  { icon: Dna, title: "Genomic" },
  { icon: Microscope, title: "Molecular" },
  { icon: Code2, title: "Pipelines" },
  { icon: Database, title: "Data Eng." },
  { icon: BarChart3, title: "Statistics" },
  { icon: Globe, title: "Collab." },
];

/*
  🎛️ ADJUST IN BROWSER DEV TOOLS:
  1. Right-click the orbit circle → Inspect
  2. Find the <div> with class "orbit-container"
  3. In the "Styles" panel, edit --orbit-y, --orbit-scale, --orbit-radius
  4. Copy the values you like and tell me!
*/
export default function Skills() {
  return (
    <section id="skills" className="snap-section">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.04, 1], x: ["0%", "-1%", "0%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
          className="w-full h-full"
        >
          <img src="/hero.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
        </motion.div>
        <div className="absolute inset-0 section-overlay-light" />
      </div>

      {/* Floating particles */}
      <FloatingParticles />

      {/* Subtle mist at bottom */}
      <motion.div
        animate={{ opacity: [0.15, 0.25, 0.15], y: ["0%", "-3%", "0%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 right-0 h-[30%] pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(220,180,140,0.2), transparent)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
        {/* Heading — top of section */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 z-20"
          style={{ marginTop: "var(--heading-y, 60px)" }}
        >
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-amber-100 leading-[1.05]">
            Skills
          </h2>
        </div>

        {/* Orbit container — centered below heading */}
        <div
          className="orbit-container relative"
          style={{
            width: "var(--orbit-size, 380px)",
            height: "var(--orbit-size, 380px)",
            marginTop: "var(--orbit-y, 40px)",
            transform: "scale(var(--orbit-scale, 1))",
          }}
        >
          {/* Ambient glow behind orbit */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.08)_0%,transparent_70%)] animate-pulse-glow" />

          {/* Outer dashed ring */}
          <div className="absolute -inset-4 rounded-full border border-dashed border-amber-400/10 animate-spin-slower" />

          {/* Main orbit ring */}
          <div className="absolute inset-0 rounded-full border border-amber-400/15" />

          {/* Inner subtle ring */}
          <div className="absolute inset-8 rounded-full border border-amber-400/8" />

          {/* Spinning layer */}
          <div className="animate-spin-slow absolute inset-0">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              const r = 0.44;
              const angle = (i * 60 - 90) * (Math.PI / 180);
              const pct = 50;
              const x = pct + Math.cos(angle) * r * 100;
              const y = pct + Math.sin(angle) * r * 100;

              return (
                <div
                  key={skill.title}
                  className="absolute flex flex-col items-center gap-1 group"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="animate-spin-reverse">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-500/10 text-amber-300 flex items-center justify-center backdrop-blur-sm group-hover:bg-amber-500/25 group-hover:shadow-lg group-hover:shadow-amber-500/20 group-hover:scale-110 transition-all duration-400">
                      <Icon size={19} strokeWidth={1.5} />
                      {/* Hover glow ring */}
                      <div className="absolute inset-0 rounded-2xl border border-amber-400/0 group-hover:border-amber-400/30 transition-all duration-400" />
                    </div>
                  </div>
                  <span className="text-amber-200/40 text-[10px] sm:text-xs font-medium leading-tight whitespace-nowrap group-hover:text-amber-200/70 transition-colors duration-300">
                    {skill.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Tiny orbiting dots on a secondary track */}
          <div className="animate-spin-slow animate-spin-faster absolute inset-12">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-400/40" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-400/30" />
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-amber-400/25" />
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-amber-400/25" />
          </div>

          {/* Center orb — breathing */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-500/10 border border-amber-400/20 flex items-center justify-center backdrop-blur-sm animate-pulse-glow">
              <div className="w-3 h-3 rounded-full bg-amber-400/60 shadow-[0_0_12px_rgba(251,191,36,0.4)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating leaves — enhanced */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-leaf"
            style={{
              left: `${5 + Math.random() * 85}%`,
              top: `${Math.random() * 90}%`,
              animationDelay: `${i * 1.8}s`,
              animationDuration: `${8 + Math.random() * 7}s`,
              fontSize: `${10 + Math.random() * 10}px`,
              opacity: 0.1 + Math.random() * 0.15,
            }}
          >
            {['🍂', '🍁', '🌿', '✨', '🌾'][i % 5]}
          </div>
        ))}
      </div>
    </section>
  );
}
