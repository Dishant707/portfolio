import { motion } from "motion/react";
import FloatingParticles from "./FloatingParticles";

export default function About() {
  return (
    <section id="about" className="snap-section">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.04, 1], x: ["0%", "-1.5%", "0%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
          className="w-full h-full"
        >
          <img src="/hero.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
        </motion.div>
        <div className="absolute inset-0 section-overlay-medium" />
      </div>

      {/* Particles */}
      <FloatingParticles />

      {/* Mist */}
      <motion.div
        animate={{ opacity: [0.12, 0.22, 0.12], y: ["0%", "-3%", "0%"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 right-0 h-[30%] pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(220,180,140,0.2), transparent)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-10 lg:px-20 py-16">
        <p className="text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-4">
          About
        </p>
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-amber-100 leading-[1.05] mb-8 sm:mb-10">
          My
          <span className="italic text-primary"> Work</span>
        </h2>

        <div className="space-y-4 max-w-2xl mx-auto">
          <p className="text-amber-200/50 leading-relaxed text-sm sm:text-base">
            I'm Dishant — an independent researcher driven by curiosity at the crossroads of <span className="text-amber-200/70">space, data, and biology</span>. Currently pursuing my BSc in Computer Science while conducting self-directed research, I thrive on solving real-world problems with open tools, satellite data, and computational methods.
          </p>

          {/* Research Areas */}
          <div className="grid sm:grid-cols-2 gap-4 mt-8 text-center">
            <div className="bg-amber-500/5 border border-amber-200/10 rounded-2xl p-5">
              <p className="text-amber-300 text-[10px] uppercase tracking-wider font-semibold mb-2">Satellite Remote Sensing</p>
              <p className="text-amber-200/40 text-xs leading-relaxed">
                Processing NISAR L2 GCOV granules (7–9 GB) for 7 Indian agricultural districts. Quantified monsoon cloud gap and Sentinel-1 SAR recovery.
              </p>
            </div>
            <div className="bg-amber-500/5 border border-amber-200/10 rounded-2xl p-5">
              <p className="text-amber-300 text-[10px] uppercase tracking-wider font-semibold mb-2">Bioinformatics</p>
              <p className="text-amber-200/40 text-xs leading-relaxed">
                Built Python toolkit for biological sequence analysis with NCBI BLAST integration. SVM promoter prediction model achieving 87.5% AUC.
              </p>
            </div>
          </div>

          {/* Certificates */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a
              href="https://drive.google.com/file/d/1UyQiAqWIJnvNdmtnpwdUpvIZUm6PZhoI/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500/5 border border-amber-200/10 rounded-full px-4 py-2 hover:bg-amber-500/15 hover:border-amber-300/30 transition-all duration-300"
            >
              <span className="text-amber-400 text-xs">🏅</span>
              <span className="text-amber-200/50 text-[11px]">RAAM · IIT Hyderabad, 2026</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1LdZSyxj088I095n1G4dnV-XTgG8Ne-4m/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500/5 border border-amber-200/10 rounded-full px-4 py-2 hover:bg-amber-500/15 hover:border-amber-300/30 transition-all duration-300"
            >
              <span className="text-amber-400 text-xs">🏅</span>
              <span className="text-amber-200/50 text-[11px]">RWC · IIT Roorkee, 2026</span>
            </a>
          </div>

          {/* Education */}
          <p className="text-amber-200/30 text-xs mt-6">
            BSc Computer Science, Golden Gate University (Expected 2027)
          </p>
        </div>
      </div>
    </section>
  );
}
