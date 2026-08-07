import { Linkedin, Github, Twitter } from "lucide-react";

const footerLinks = {
  "Quick Links": ["Home", "Skills", "Research", "Works", "Connect"],
  Research: ["Publications", "Projects", "Datasets", "Software", "Collaborations"],
  Resources: ["CV / Resume", "Google Scholar", "ResearchGate", "ORCID", "GitHub"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#home" className="font-heading text-2xl font-bold text-white">
              Dishant Patidar
            </a>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed max-w-xs">
              Researcher &amp; Bioinformatologist — decoding the language of life
              through computation and data.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Linkedin, Github, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-gray-400 hover:bg-accent hover:text-gray-900 transition-all duration-300"
                  aria-label="Social media"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-gray-400 mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Dishant Patidar. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Photography by{" "}
            <a
              href="https://unsplash.com/@lucascalloch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors underline underline-offset-2"
            >
              Lucas Calloch
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
