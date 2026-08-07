import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import FloatingParticles from "./FloatingParticles";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-screen min-h-[700px] overflow-hidden"
    >
      {/* ===== LAYER 1: Ken Burns slow drift (zoom + pan) ===== */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 -top-[10%] h-[120%]"
      >
        <motion.div
          animate={{
            scale: [1, 1.06, 1],
            x: ["0%", "-2%", "0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
          className="w-full h-full"
        >
          <img
            src="/hero.jpg"
            alt="Serene mountain landscape"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </motion.div>
      </motion.div>

      {/* ===== LAYER 2: Animated god rays (light beams) ===== */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{
            opacity: [0.08, 0.18, 0.08],
            x: ["-5%", "5%", "-5%"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 120% 80% at 30% 20%, rgba(255,180,100,0.4) 0%, transparent 60%), radial-gradient(ellipse 80% 60% at 70% 40%, rgba(255,160,80,0.25) 0%, transparent 50%)",
          }}
        />
        {/* Diagonal light shafts */}
        <motion.div
          animate={{
            opacity: [0.04, 0.12, 0.04],
            rotate: [-1, 1, -1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -inset-[50%]"
          style={{
            background:
              "linear-gradient(105deg, transparent 30%, rgba(255,180,100,0.35) 45%, transparent 50%, transparent 60%, rgba(255,160,80,0.2) 70%, transparent 80%)",
          }}
        />
      </div>

      {/* ===== LAYER 3: Floating light particles (dust motes) ===== */}
      <FloatingParticles />

      {/* ===== LAYER 4: Breathing vignette ===== */}
      <motion.div
        animate={{ opacity: [0.55, 0.7, 0.55] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 z-[4] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ===== LAYER 5: Gradient overlays ===== */}
      <div className="absolute inset-0 z-[2] hero-overlay" />

      {/* ===== LAYER 6: Subtle mist/fog at bottom ===== */}
      <motion.div
        animate={{
          opacity: [0.2, 0.35, 0.2],
          y: ["0%", "-5%", "0%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 right-0 h-[40%] z-[2] pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(220,180,140,0.25) 0%, rgba(210,160,120,0.08) 40%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ===== CONTENT ===== */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm sm:text-base tracking-[0.25em] uppercase text-amber-200/70 mb-4"
        >
          Researcher &amp; Bioinformatologist
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-amber-100 leading-[1.05]"
        >
          Dishant
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 text-lg sm:text-xl text-amber-100/80 max-w-xl leading-relaxed"
        >
          Where computation meets the living world — exploring the hidden
          patterns woven into the fabric of life.
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#skills"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-amber-300/60 hover:text-amber-200 transition-colors"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">
            Scroll
          </span>
          <ArrowDown size={16} />
        </motion.a>
      </motion.div>
    </section>
  );
}
