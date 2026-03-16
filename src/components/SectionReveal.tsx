import React from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "right" | "fade";
}

export default function SectionReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: SectionRevealProps) {
  const { ref, isInView } = useInView();

  const base = "transition-all duration-700 ease-out";
  const hidden =
    direction === "up"
      ? "opacity-0 translate-y-8"
      : direction === "right"
      ? "opacity-0 -translate-x-6"
      : "opacity-0";
  const visible = "opacity-100 translate-y-0 translate-x-0";

  return (
    <div
      ref={ref}
      className={cn(base, isInView ? visible : hidden, className)}
      style={{ transitionDelay: isInView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
