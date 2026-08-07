import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "Work" },
  { href: "#connect", label: "Connect" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < window.innerHeight * 0.7);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed top-0 left-0 right-0 z-50 bg-transparent py-5"
        >
      <div className="w-full px-6 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2.5 group"
        >
          {/* DNA Helix Logo */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
            aria-label="DNA helix logo"
          >
            {/* Left strand */}
            <path
              d="M12 4 C12 16 18 40 36 44"
              stroke="#FCD34D"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.9"
            />
            {/* Right strand */}
            <path
              d="M36 4 C36 16 30 40 12 44"
              stroke="#FBBF24"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.7"
            />
            {/* Cross rung 1 */}
            <line x1="14.5" y1="9" x2="33.5" y2="9" stroke="#FDE68A" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
            {/* Cross rung 2 */}
            <line x1="16.5" y1="16" x2="31.5" y2="16" stroke="#FDE68A" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
            {/* Cross rung 3 */}
            <line x1="18.5" y1="23" x2="29.5" y2="23" stroke="#FDE68A" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
            {/* Cross rung 4 */}
            <line x1="20" y1="30" x2="28.5" y2="30" stroke="#FDE68A" strokeWidth="1.8" strokeLinecap="round" opacity="0.4" />
            {/* Cross rung 5 */}
            <line x1="17" y1="37" x2="25" y2="37" stroke="#FDE68A" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
            {/* Subtle glow */}
            <circle cx="24" cy="24" r="20" fill="none" stroke="#F59E0B" strokeWidth="0.5" opacity="0.2" />
          </svg>
        </a>

        {/* Desktop links — show from 640px */}
        <div className="hidden sm:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-white/90 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger — hide from 640px */}
        <button
          className="sm:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/60 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
