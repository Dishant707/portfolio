import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] overflow-hidden bg-black"
    >
      <iframe
        src="/egypt.html"
        title="Desert cinematic hero"
        className="absolute inset-0 w-full h-full border-0"
        allow="autoplay"
        loading="eager"
      />

      {/* Scroll indicator overlay */}
      <a
        href="#skills"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-amber-200/60 hover:text-amber-100 transition-colors"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">
          Scroll
        </span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
