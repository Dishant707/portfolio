import { motion } from "motion/react";
import { ArrowRight, Mail, MapPin, Linkedin, Github } from "lucide-react";
import FloatingParticles from "./FloatingParticles";

export default function Connect() {
  return (
    <section id="connect" className="snap-section">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.05, 1], x: ["0%", "1%", "0%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
          className="w-full h-full"
        >
          <img src="/hero.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
        </motion.div>
        <div className="absolute inset-0 section-overlay-dark" />
      </div>

      {/* Particles */}
      <FloatingParticles />

      {/* Mist */}
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1], y: ["0%", "-2%", "0%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 right-0 h-[25%] pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(220,180,140,0.15), transparent)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-10 lg:px-20 py-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start text-left max-w-4xl w-full">
          {/* Left */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-accent font-semibold mb-4">
              Let's Connect
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-100 leading-[1.05] mb-6">
              Get in
              <span className="italic text-accent"> touch</span>
            </h2>
            <p className="text-amber-200/40 leading-relaxed max-w-sm text-sm">
              Open to collaborations, research discussions, and speaking opportunities.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { icon: Mail, label: "Email", value: "dishantbiotech@gmail.com" },
                { icon: MapPin, label: "Location", value: "Hyderabad, India" },
              ].map((item) => (
                <div key={item.label} className="flex gap-3 items-start">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                    <item.icon size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-amber-200/30 text-[11px] uppercase tracking-wider font-semibold">{item.label}</p>
                    <p className="text-amber-100/80 text-sm mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a href="https://www.linkedin.com/in/dishant-patidar-159698380/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-amber-300 hover:text-amber-200 transition-colors font-medium">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="https://github.com/Dishant707" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-amber-300 hover:text-amber-200 transition-colors font-medium">
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your name" className="w-full px-0 py-3 bg-transparent border-b border-amber-200/10 text-amber-100 placeholder:text-amber-200/20 focus:outline-none focus:border-accent/50 transition-colors text-sm" />
              <input type="email" placeholder="Email address" className="w-full px-0 py-3 bg-transparent border-b border-amber-200/10 text-amber-100 placeholder:text-amber-200/20 focus:outline-none focus:border-accent/50 transition-colors text-sm" />
              <textarea rows={3} placeholder="Your message..." className="w-full px-0 py-3 bg-transparent border-b border-amber-200/10 text-amber-100 placeholder:text-amber-200/20 focus:outline-none focus:border-accent/50 transition-colors text-sm resize-none" />
              <button className="mt-4 group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent text-gray-900 font-semibold text-sm hover:bg-accent/90 transition-all">
                Send Message <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
