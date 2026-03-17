import React from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

interface WritingSample {
  title: string;
  outlet?: string;
  excerpt: string;
  tags: string[];
  link?: string;
  date?: string;
}

// Replace with real writing samples
const WRITING_SAMPLES: WritingSample[] = [
  {
    title: "Understanding Sidechain Compression in Modern Production",
    outlet: "Personal Blog",
    excerpt:
      "A plain-language breakdown of sidechain techniques — from classic pumping effects to invisible glue compression — with practical routing examples for Logic Pro.",
    tags: ["Compression", "Logic Pro", "Tutorial"],
    link: "#",
    date: "2024",
  },
  {
    title: "FM Synthesis Demystified: Carrier, Modulator, and Ratio",
    outlet: "Music Technology Docs",
    excerpt:
      "Technical explainer translating FM synthesis mathematics into intuitive concepts for producers, covering operator ratios, feedback, and timbral control.",
    tags: ["FM Synthesis", "Education", "Sound Design"],
    link: "#",
    date: "2024",
  },
  {
    title: "Plugin Review Methodology: Evaluating Audio Tools Systematically",
    outlet: "Technical Writing",
    excerpt:
      "A documentation framework for consistently evaluating audio software — covering sonic character, CPU performance, workflow integration, and usability considerations.",
    tags: ["Documentation", "Plugin Review", "Workflow"],
    link: "#",
    date: "2023",
  },
  {
    title: "Signal Flow Fundamentals for the Modern DAW",
    outlet: "Educational Content",
    excerpt:
      "End-to-end guide covering how audio signals travel through a DAW session — from input to output — with diagrams and troubleshooting tips for common routing issues.",
    tags: ["Signal Flow", "DAW", "Beginner"],
    link: "#",
    date: "2023",
  },
];

export default function WritingSamplesSection() {
  return (
    <section className="space-y-6">
      <h2 className="font-mono text-xs tracking-[0.25em] uppercase text-primary">
        // Writing & Documentation
      </h2>

      <div className="space-y-4">
        {WRITING_SAMPLES.map((sample, i) => (
          <SectionReveal key={sample.title} delay={i * 80} direction="up">
            <div className="group relative pl-5 border-l border-border hover:border-primary/50 transition-colors duration-500 space-y-2 py-1">
              {/* Dot on the left border */}
              <div className="absolute -left-[3px] top-2 w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary group-hover:shadow-[0_0_6px_hsl(var(--primary)/0.6)] transition-all duration-300" />

              <div className="flex items-start justify-between gap-3">
                <div className="space-y-0.5 min-w-0">
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                    {sample.title}
                  </h3>
                  {(sample.outlet || sample.date) && (
                    <p className="font-mono text-[10px] text-muted-foreground">
                      {[sample.outlet, sample.date].filter(Boolean).join(" · ")}
                    </p>
                  )}
                </div>
                {sample.link && (
                  <a
                    href={sample.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">{sample.excerpt}</p>

              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {sample.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] font-mono rounded border border-border/60 bg-secondary/20 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
