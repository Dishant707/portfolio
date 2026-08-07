import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const works = [
  {
    title: "Bridging the Pixel-to-Plot Gap: NISAR L-Band Backscatter Validation",
    journal: "AGU Fall Meeting, 2026",
    description:
      "Multi-sensor assessment of satellite-based crop monitoring for smallholder agriculture in India, with real NISAR L-band backscatter validation across 7 districts.",
    tags: ["NISAR", "Sentinel-1", "Python", "HDF5"],
    link: "#",
  },
  {
    title: "Tokenized Demand Response Incentive Mechanisms for Energy Grids",
    journal: "RAAM, IIT Hyderabad, 2026",
    description:
      "Oral presentation on blockchain-based incentive mechanisms for demand response in smart energy grids.",
    tags: ["Energy", "Blockchain", "Optimization"],
    link: "#",
  },
  {
    title: "Climate & Land Use Change Impact on Streamflow",
    journal: "RWC, IIT Roorkee, 2026",
    description:
      "Evaluating climate change and land use change impact on streamflow using LSTM and XGBoost in the Betwa River Basin.",
    tags: ["LSTM", "XGBoost", "Hydrology", "Python"],
    link: "#",
  },
];

export default function Works() {
  return (
    <section id="works" className="snap-section">
      <div className="absolute inset-0">
        <img src="/hero.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 section-overlay-light" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-10 lg:px-20 py-16">
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-amber-100 leading-[1.05] mb-14 sm:mb-18">
          Selected
          <span className="italic text-primary"> Works</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 text-left max-w-3xl w-full">
          {works.map((work, i) => (
            <motion.a
              key={work.title}
              href={work.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group block p-5 sm:p-7 rounded-2xl bg-amber-500/5 border border-amber-200/10 hover:border-primary/30 hover:bg-amber-500/8 transition-all duration-400"
            >
              <span className="text-[11px] font-medium text-amber-300 mb-3 block">
                {work.journal}
              </span>
              <h3 className="font-heading text-sm font-semibold text-amber-100 group-hover:text-primary transition-colors mb-2">
                {work.title}
              </h3>
              <p className="text-amber-200/35 text-[13px] leading-relaxed mb-4">
                {work.description}
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-amber-200/5">
                {work.tags.map((tag) => (
                  <span key={tag} className="text-[11px] text-amber-200/25">{tag}</span>
                ))}
                <ArrowUpRight size={13} className="ml-auto text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
