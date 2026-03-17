import React, { useState } from "react";
import { ExternalLink, Music, Wrench, FileText } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

const CATEGORIES = ["All", "Audio Tools", "Music", "Writing"] as const;
type Category = (typeof CATEGORIES)[number];

interface Project {
  title: string;
  description: string;
  category: Exclude<Category, "All">;
  link?: string;
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    title: "Modular Signal Chain Framework",
    category: "Audio Tools",
    description:
      "Experimental routing system built to test and document plugin behavior across different DAW environments. Documented latency, CPU load, and sonic characteristics.",
    tags: ["Logic Pro", "Signal Processing", "Documentation"],
    link: "#",
  },
  {
    title: "Data-to-Music Translation System",
    category: "Audio Tools",
    description:
      "Conceptual audio system that converts structured data (numerical sequences, patterns) into MIDI and sound design parameters — bridging math and music.",
    tags: ["MIDI", "Synthesis", "Concept"],
    link: "#",
  },
  {
    title: "Ambient Production — Vol. 1",
    category: "Music",
    description:
      "Original ambient and cinematic compositions produced entirely in-the-box using synthesis, granular processing, and layered sound design.",
    tags: ["Production", "Sound Design", "Ambient"],
    link: "#",
  },
  {
    title: "Experimental Synthesis Study",
    category: "Music",
    description:
      "Series of patches exploring FM, wavetable, and physical modeling synthesis — documented with notes on technique, patch architecture, and sonic results.",
    tags: ["Synthesis", "FM", "Wavetable"],
    link: "#",
  },
  {
    title: "Audio Plugin Deep Dive Series",
    category: "Writing",
    description:
      "Long-form technical breakdowns of audio plugins — covering DSP concepts, workflow integration, and practical use cases for producers and sound designers.",
    tags: ["Technical Writing", "Plugins", "Education"],
    link: "#",
  },
  {
    title: "Music Technology Explainer Docs",
    category: "Writing",
    description:
      "Plain-language documentation translating complex audio engineering concepts for musicians, covering EQ, compression, reverb, and signal flow.",
    tags: ["Documentation", "Education", "Signal Flow"],
    link: "#",
  },
];

const CATEGORY_ICONS: Record<Exclude<Category, "All">, React.ElementType> = {
  "Audio Tools": Wrench,
  Music: Music,
  Writing: FileText,
};

export default function ProjectsSection() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section className="space-y-6">
      <h2 className="font-mono text-xs tracking-[0.25em] uppercase text-primary">
        // Featured Work
      </h2>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-3 py-1 text-xs font-mono rounded-md border transition-all duration-300 ${
              active === cat
                ? "border-primary text-primary bg-primary/10 shadow-[0_0_12px_hsl(var(--primary)/0.25)]"
                : "border-border text-muted-foreground bg-secondary/30 hover:border-primary/40 hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 gap-4">
        {filtered.map((project, i) => {
          const Icon = CATEGORY_ICONS[project.category];
          return (
            <SectionReveal key={project.title} delay={i * 80} direction="up">
              <div className="group relative rounded-lg border border-border bg-card p-5 space-y-3 hover:border-primary/40 hover:shadow-[0_0_24px_hsl(var(--primary)/0.1)] transition-all duration-500 h-full flex flex-col">
                {/* Top row */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Icon className="w-3.5 h-3.5 text-primary opacity-70 shrink-0" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-primary opacity-60">
                      {project.category}
                    </span>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary hover:text-primary"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <h3 className="text-sm font-semibold text-foreground leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
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
          );
        })}
      </div>
    </section>
  );
}
