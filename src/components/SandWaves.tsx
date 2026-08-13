export default function SandWaves() {
  // Layered sand ripples that drift slowly like wind-blown dunes
  const waves = [
    { bottom: "2%", opacity: 0.18, duration: 26, height: 50, color: "#e8c08a" },
    { bottom: "8%", opacity: 0.14, duration: 34, height: 40, color: "#d7a777" },
    { bottom: "14%", opacity: 0.11, duration: 42, height: 36, color: "#c8915c" },
    { bottom: "20%", opacity: 0.08, duration: 52, height: 30, color: "#a76737" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {waves.map((w, i) => (
        <div
          key={i}
          className="absolute left-0 w-[200%]"
          style={{
            bottom: w.bottom,
            height: w.height,
            opacity: w.opacity,
            animation: `sandDrift ${w.duration}s linear infinite`,
            animationDelay: `${-i * 7}s`,
          }}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M0 30 Q 37.5 0, 75 30 T 150 30 T 225 30 T 300 30 T 375 30 T 450 30 T 525 30 T 600 30 T 675 30 T 750 30 T 825 30 T 900 30 T 975 30 T 1050 30 T 1125 30 T 1200 30"
              stroke={w.color}
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
