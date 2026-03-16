import React from "react";

const NUM_BARS = 64;

function generateBarHeights(count: number): number[] {
  const heights: number[] = [];
  for (let i = 0; i < count; i++) {
    const x = i / count;
    const base = Math.sin(x * Math.PI * 4) * 0.4 + 0.5;
    const detail = Math.sin(x * Math.PI * 13) * 0.15 + Math.sin(x * Math.PI * 7) * 0.1;
    heights.push(Math.max(0.06, base + detail));
  }
  return heights;
}

const BARS = generateBarHeights(NUM_BARS);

export default function WaveformVisualizer() {
  return (
    <div className="relative w-full max-w-2xl mx-auto h-16 flex items-end gap-[2px] overflow-hidden">
      {BARS.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-full bg-primary opacity-70"
          style={{
            height: `${h * 100}%`,
            animation: `waveform-bar ${0.8 + Math.random() * 1.2}s ease-in-out ${i * 0.02}s infinite alternate`,
            minWidth: "2px",
          }}
        />
      ))}
      {/* Fade edges */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none" />
      <style>{`
        @keyframes waveform-bar {
          from { transform: scaleY(0.25); opacity: 0.5; }
          to   { transform: scaleY(1);    opacity: 0.9; }
        }
      `}</style>
    </div>
  );
}
