import React from "react";
import { cn } from "@/lib/utils";

interface EQSkillBarProps {
  label: string;
  level: number; // 0-100
  delay?: number;
  isVisible: boolean;
}

export default function EQSkillBar({ label, level, delay = 0, isVisible }: EQSkillBarProps) {
  return (
    <div className="flex items-center gap-3 group">
      <span className="font-mono text-xs text-muted-foreground w-48 shrink-0 group-hover:text-primary transition-colors duration-300">
        {label}
      </span>
      <div className="flex-1 relative h-5 flex items-center gap-[2px]">
        {Array.from({ length: 20 }).map((_, i) => {
          const threshold = (i / 20) * 100;
          const active = threshold < level;
          return (
            <div
              key={i}
              className={cn(
                "h-full flex-1 rounded-sm transition-all duration-100",
                active
                  ? "bg-primary"
                  : "bg-muted"
              )}
              style={{
                opacity: isVisible && active ? 1 : active ? 0 : 0.3,
                transform: isVisible && active ? "scaleY(1)" : "scaleY(0.3)",
                transitionDelay: isVisible ? `${delay + i * 25}ms` : "0ms",
                transformOrigin: "bottom",
              }}
            />
          );
        })}
        {/* Glow overlay on active bars */}
        {isVisible && (
          <div
            className="absolute inset-0 pointer-events-none rounded-sm"
            style={{
              background: `linear-gradient(to right, hsl(182 100% 50% / 0.15) ${level}%, transparent ${level}%)`,
              transitionDelay: `${delay}ms`,
            }}
          />
        )}
      </div>
      <span className="font-mono text-xs text-primary opacity-70 w-8 text-right">{level}</span>
    </div>
  );
}
