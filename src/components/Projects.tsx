import { motion } from "motion/react";
import { Github, Linkedin } from "lucide-react";
import FloatingParticles from "./FloatingParticles";
import SandWaves from "./SandWaves";

/*
  ✏️ EDIT THIS LIST WEEKLY — add / remove / reorder projects freely.
  - github   → the repo URL
  - linkedin → the LinkedIn post where you shared the project PDF.
               (I used your profile URL as a placeholder — paste the
               specific post link for each project.)
*/
const projects = [
  {
    title: "Scanpy Kernels",
    desc: "Rust-accelerated, numerically-verified kernels for single-cell analysis.",
    github: "https://github.com/Dishant707/scanpy-kernels",
    linkedin: "https://www.linkedin.com/in/dishant-patidar-159698380/",
  },
  {
    title: "Xenon-core",
    desc: "Python + Rust bioinformatics toolkit — k-mer counting & DNA utilities (~500×).",
    github: "https://github.com/Dishant707/Xenon-core",
    linkedin: "https://www.linkedin.com/in/dishant-patidar-159698380/",
  },
  {
    title: "RNA-Seq Pipeline",
    desc: "Reproducible Snakemake pipeline: FastQC → STAR → featureCounts → DESeq2.",
    github: "https://github.com/Dishant707/RNA-Seq-Reproducible-Pipeline",
    linkedin: "https://www.linkedin.com/in/dishant-patidar-159698380/",
  },
  {
    title: "DeepSynergy",
    desc: "Graph neural network predicting synergistic anti-cancer drug combinations.",
    github: "https://github.com/Dishant707/deepsynergy",
    linkedin: "https://www.linkedin.com/in/dishant-patidar-159698380/",
  },
  {
    title: "r16-aligner",
    desc: "C++20 short-read aligner — SA-IS suffix array, FM-index, Myers bit-vector.",
    github: "https://github.com/Dishant707/r16-aligner",
    linkedin: "https://www.linkedin.com/in/dishant-patidar-159698380/",
  },
  {
    title: "EpiSim",
    desc: "Interactive SIR epidemiology simulator — Rust core compiled to WebAssembly.",
    github: "https://github.com/Dishant707/episim",
    linkedin: "https://www.linkedin.com/in/dishant-patidar-159698380/",
  },
  {
    title: "Molio",
    desc: "Universal molecular parser — PDB, mmCIF, SDF, XYZ (CLI, Desktop, WASM).",
    github: "https://github.com/Dishant707/molio",
    linkedin: "https://www.linkedin.com/in/dishant-patidar-159698380/",
  },
  {
    title: "Biology Atlas",
    desc: "Interactive 3D dissectable human anatomy viewer built from BodyParts3D.",
    github: "https://github.com/Dishant707/biology-atlas",
    linkedin: "https://www.linkedin.com/in/dishant-patidar-159698380/",
  },
  {
    title: "Genome Atlas",
    desc: "Genome visualisation project.",
    github: "https://github.com/Dishant707/genome-atlas",
    linkedin: "https://www.linkedin.com/in/dishant-patidar-159698380/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="snap-section">
      {/* Desert gradient background */}
      <div className="absolute inset-0 section-overlay-medium" />

      <SandWaves />
      <FloatingParticles />

      <div className="relative z-10 w-full h-full overflow-y-auto">
        <div className="min-h-full flex flex-col items-center justify-center px-4 sm:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-8"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-3">
              Research &amp; Projects
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-amber-100 leading-[1.05] mb-4">
              Selected <span className="italic text-primary">Projects</span>
            </h2>
            <p className="text-amber-200/50 text-sm max-w-2xl mx-auto">
              A rolling window of work — updated weekly. GitHub for the code,
              LinkedIn for the story.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl w-full">
            {projects.map((p) => (
              <div
                key={p.title}
                className="group bg-amber-500/5 border border-amber-200/10 rounded-2xl p-4 text-left hover:bg-amber-500/10 hover:border-amber-300/30 transition-all duration-300"
              >
                <h3 className="text-amber-100 text-sm font-semibold">{p.title}</h3>
                <p className="text-amber-200/40 text-xs leading-relaxed mt-1.5 line-clamp-2">
                  {p.desc}
                </p>
                <div className="flex items-center gap-4 mt-3 pt-3 border-t border-amber-200/10">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-amber-300/80 hover:text-amber-200 text-xs font-medium transition-colors"
                  >
                    <Github size={13} /> GitHub
                  </a>
                  <a
                    href={p.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-amber-300/80 hover:text-amber-200 text-xs font-medium transition-colors"
                  >
                    <Linkedin size={13} /> LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
