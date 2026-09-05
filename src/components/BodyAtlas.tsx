import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import FloatingParticles from "./FloatingParticles";
import SandWaves from "./SandWaves";

export default function BodyAtlas() {
  return (
    <section id="atlas" className="snap-section">
      {/* Desert gradient background */}
      <div className="absolute inset-0 section-overlay-dark" />

      {/* Flowing sand waves + particles */}
      <SandWaves />
      <FloatingParticles />

      <div className="relative z-10 flex flex-col items-center w-full h-full px-4 sm:px-8 pt-20 pb-8">
        {/* Decorative: three dashed orbit rings (echoes Skills section) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-24 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[460px] sm:h-[460px]"
        >
          <div className="absolute inset-0 rounded-full border border-dashed border-amber-400/20 animate-spin-slower" />
          <div className="absolute inset-10 rounded-full border border-dashed border-amber-400/15 animate-spin-slow" />
          <div className="absolute inset-20 rounded-full border border-dashed border-amber-400/10 animate-spin-reverse" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative text-center"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-3">
            Computational Biology
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-amber-100 leading-[1.05]">
            Dissectable <span className="italic text-primary">Human Atlas</span>
          </h2>
          <p className="text-amber-200/50 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            An interactive 3D anatomy viewer built from BodyParts3D meshes.
            Click a system to expand, click a part to isolate — explore
            skeletal, muscular, cardiovascular, nervous and organ systems.
          </p>
        </motion.div>

        {/* Embedded viewer */}
        <div className="relative w-full max-w-5xl flex-1 min-h-0 mt-6 rounded-2xl overflow-hidden border border-amber-200/15 bg-black/60 shadow-2xl shadow-black/40">
          <iframe
            src="/body/web/index.html"
            title="Interactive dissectable human anatomy atlas"
            className="w-full h-full border-0"
            loading="lazy"
            allow="fullscreen; autoplay"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-4">
          <a
            href="/body/web/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-amber-200/60 hover:text-amber-100 text-xs transition-colors duration-300"
          >
            Open full screen
            <ExternalLink size={12} />
          </a>
          <span className="text-amber-200/25 text-[10px]">
            BodyParts3D · CC BY-SA 2.1 JP
          </span>
        </div>
      </div>
    </section>
  );
}
