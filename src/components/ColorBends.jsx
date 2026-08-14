import React, { useMemo } from 'react';

function hexToRgb(hex) {
  const clean = hex.replace('#', '');
  const bigint = parseInt(clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}

export function ColorBends({
  color = '#A855F7',
  speed = 0.2,
  frequency = 1.0,
  noise = 0.15,
  bandWidth = 0.14,
  rotation = 90,
  fadeTop = 0.75,
  iterations = 1,
  intensity = 1.0,
  style,
  className = '',
}) {
  const rgb = useMemo(() => hexToRgb(color), [color]);

  // number of bands is derived from bandWidth and iterations
  const bands = Math.max(4, Math.round((1 / Math.max(0.02, bandWidth)) * Math.max(1, iterations)));

  const bandElements = [];
  for (let i = 0; i < bands; i++) {
    const offset = i / bands;
    const opacity = Math.max(0, Math.min(1, intensity * (1 - offset * (1 - fadeTop))));
    const delay = (i / bands) * (1 / Math.max(0.01, speed));
    const move = 20 * frequency * (0.5 + 0.5 * Math.sin(i));

    const bandStyle = {
      position: 'absolute',
      inset: '-40% -40%',
      transform: `translateY(${move}px)`,
      background: `linear-gradient(90deg, rgba(${rgb}, ${opacity}) 0%, rgba(${rgb}, ${opacity * 0.6}) 50%, rgba(${rgb}, 0) 100%)`,
      mixBlendMode: 'screen',
      opacity: 0.85,
      filter: `blur(${Math.max(0, noise * 30)}px)`,
      animation: `bendMove ${Math.max(0.1, 6 / Math.max(0.01, speed))}s linear ${delay}s infinite`,
      transformOrigin: 'center',
    };

    bandElements.push(
      <div key={i} className="color-bend-band" style={bandStyle} />
    );
  }

  return (
    <div
      className={`color-bends-root ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        transform: `rotate(${rotation}deg)`,
        ...style,
      }}
    >
      <style>{`
        .color-bends-root { width: 100%; height: 100%; }
        .color-bends-root .color-bend-band { pointer-events: none; }
        @keyframes bendMove {
          0% { transform: translateY(-10%) translateZ(0); }
          50% { transform: translateY(10%) translateZ(0); }
          100% { transform: translateY(-10%) translateZ(0); }
        }
      `}</style>

      {bandElements}

      {/* subtle overlay for stronger fade at top */}
      <div style={{
        position: 'absolute', left: 0, right: 0, top: 0, bottom: 0,
        background: `linear-gradient(to bottom, rgba(0,0,0,${1 - fadeTop}) 0%, rgba(0,0,0,0) 40%)`,
        mixBlendMode: 'multiply', pointerEvents: 'none'
      }} />
    </div>
  );
}

export default ColorBends;
