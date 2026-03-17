import React from "react";
import { Mail, Phone, Linkedin, Globe, MapPin } from "lucide-react";
import WaveformVisualizer from "@/components/WaveformVisualizer";
import SectionReveal from "@/components/SectionReveal";
import ProjectsSection from "@/components/ProjectsSection";
import AudioPlayerSection from "@/components/AudioPlayerSection";
import WritingSamplesSection from "@/components/WritingSamplesSection";
import VideoSection from "@/components/VideoSection";
import { useInView } from "@/hooks/useInView";

const CONTACT_LINKS = [
  { icon: MapPin, label: "Los Angeles, CA", href: null },
  { icon: Phone, label: "973-349-8750", href: "tel:9733498750" },
  { icon: Mail, label: "michaelanticoli@gmail.com", href: "mailto:michaelanticoli@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/michael-anticoli" },
  { icon: Globe, label: "Portfolio", href: "https://michaelanticoli.com" },
];

const AUDIO_SKILLS = [
  "Music Production & Sound Design",
  "DAW Workflow Optimization",
  "Audio Plugin Testing",
  "Signal Processing Concepts",
  "Creative Audio Experimentation",
  "Plugin Documentation & Tutorials",
  "Technical Writing for Musicians",
  "Sound Design & Synthesis",
];

const TOOLS = [
  "Logic Pro",
  "VST / AU Plugins",
  "Audio Plugin Hosts",
  "MacOS & Windows",
  "Audio Interface Configuration",
  "Excel / Google Sheets",
  "Generative AI tools",
];

const EXPERIENCE = [
  {
    title: "Music Producer & Sound Designer",
    company: "Independent",
    location: "Los Angeles",
    period: "2018 – Present",
    bullets: [
      "Compose and produce original music using digital audio workstations and plugin-based production environments.",
      "Experiment with synthesis, sound design, and signal processing techniques using modern audio plugin ecosystems.",
      "Evaluate audio tools and production workflows, documenting performance, sonic characteristics, and usability insights.",
      "Develop educational explanations of music technology concepts for musicians and creators.",
    ],
  },
  {
    title: "Audio Systems & Creative Technology Research",
    company: null,
    location: null,
    period: null,
    bullets: [
      "Developed experimental frameworks exploring the relationship between music, mathematics, and digital signal systems.",
      "Created conceptual audio systems that translate structured data into musical patterns and sound design.",
      "Produce documentation and explanations that make complex audio concepts understandable to creative users.",
    ],
  },
  {
    title: "Brand Strategy & Communication Consultant",
    company: null,
    location: null,
    period: null,
    bullets: [
      "Translate complex ideas into accessible explanations, narratives, and documentation for audiences.",
      "Develop structured writing for technical and creative concepts.",
      "Apply research and communication frameworks to explain emerging technologies.",
    ],
  },
];

/* ─── Section divider ─── */
function WaveDivider() {
  return (
    <div className="relative w-full h-6 my-14 flex items-center">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-4 flex items-center gap-1">
        {[3, 6, 4, 8, 5, 7, 3].map((h, i) => (
          <div
            key={i}
            className="w-px rounded-full bg-primary"
            style={{ height: `${h * 2}px`, opacity: 0.35 + (i === 3 ? 0.45 : 0) }}
          />
        ))}
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
}

/* ─── Skills list — clean, minimal ─── */
function SkillsList() {
  const { ref, isInView } = useInView();
  return (
    <div ref={ref} className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
      {AUDIO_SKILLS.map((skill, i) => (
        <div
          key={skill}
          className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateX(0)" : "translateX(-12px)",
            transition: `opacity 0.4s ease ${i * 60}ms, transform 0.4s ease ${i * 60}ms`,
          }}
        >
          <span
            className="w-1 h-1 rounded-full bg-primary shrink-0 group-hover:shadow-[0_0_6px_hsl(182_100%_50%/0.8)] transition-all duration-300"
            style={{ boxShadow: isInView ? "0 0 4px hsl(182 100% 50% / 0.4)" : "none" }}
          />
          {skill}
        </div>
      ))}
    </div>
  );
}

/* ─── Main Index page ─── */
export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-primary/[0.04] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16 space-y-0">
        {/* ═══ HERO ═══ */}
        <header className="text-center space-y-6 pb-6">
          <SectionReveal delay={0} direction="fade">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Resume // 2025
            </p>
          </SectionReveal>

          <SectionReveal delay={100} direction="fade">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight animate-name-glow text-primary">
              Michael Anticoli
            </h1>
          </SectionReveal>

          <SectionReveal delay={250} direction="fade">
            <p className="font-mono text-sm text-primary opacity-80 tracking-wide">
              Audio Technology & Plugin Specialist
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Sound Design · Music Production · Technical Writing
            </p>
          </SectionReveal>

          <SectionReveal delay={350} direction="fade">
            <WaveformVisualizer />
          </SectionReveal>

          {/* Contact links */}
          <SectionReveal delay={500} direction="fade">
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              {CONTACT_LINKS.map((c) => {
                const inner = (
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border bg-secondary/50 text-xs text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-[0_0_12px_hsl(182_100%_50%/0.18)] transition-all duration-300 cursor-pointer">
                    <c.icon className="w-3.5 h-3.5" />
                    {c.label}
                  </span>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer">
                    {inner}
                  </a>
                ) : (
                  <span key={c.label}>{inner}</span>
                );
              })}
            </div>
          </SectionReveal>
        </header>

        <WaveDivider />

        {/* ═══ SUMMARY ═══ */}
        <SectionReveal>
          <section className="relative pl-5 border-l-2 border-primary/40 space-y-4">
            <h2 className="font-mono text-xs tracking-[0.25em] uppercase text-primary">
              // Summary
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Audio technologist and music producer with experience in sound design, plugin workflows, and digital music production systems. Combines technical understanding of audio tools with strong communication and writing skills to explain complex audio concepts clearly through documentation, tutorials, and user support.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Experienced in testing and evaluating creative software, translating technical behavior into practical explanations for musicians and producers. Background in marketing and storytelling enables clear documentation, user education, and product communication for audio software tools.
            </p>
          </section>
        </SectionReveal>

        <WaveDivider />

        {/* ═══ AUDIO SKILLS ═══ */}
        <SectionReveal>
          <section className="space-y-6">
            <h2 className="font-mono text-xs tracking-[0.25em] uppercase text-primary">
              // Audio & Music Technology Skills
            </h2>
            <SkillsList />
          </section>
        </SectionReveal>

        <WaveDivider />

        {/* ═══ TOOLS ═══ */}
        <SectionReveal>
          <section className="space-y-6">
            <h2 className="font-mono text-xs tracking-[0.25em] uppercase text-primary">
              // Tools & Software
            </h2>
            <div className="flex flex-wrap gap-2">
              {TOOLS.map((tool, i) => (
                <SectionReveal key={tool} delay={i * 60} direction="fade">
                  <span className="px-4 py-1.5 text-xs font-mono rounded-md border border-border bg-secondary/30 text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-[0_0_10px_hsl(182_100%_50%/0.18)] transition-all duration-300 cursor-default">
                    {tool}
                  </span>
                </SectionReveal>
              ))}
            </div>
          </section>
        </SectionReveal>

        <WaveDivider />

        {/* ═══ EXPERIENCE — timeline ═══ */}
        <SectionReveal>
          <section className="space-y-8">
            <h2 className="font-mono text-xs tracking-[0.25em] uppercase text-primary">
              // Relevant Experience
            </h2>

            <div className="relative space-y-10 pl-8">
              {/* Vertical timeline line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

              {EXPERIENCE.map((exp, idx) => (
                <SectionReveal key={idx} delay={idx * 120}>
                  <div className="relative group">
                    {/* Timeline dot — glowing */}
                    <div className="absolute -left-8 top-1 flex items-center justify-center">
                      <div className="w-3.5 h-3.5 rounded-full bg-background border-2 border-primary shadow-[0_0_8px_hsl(182_100%_50%/0.5)] group-hover:shadow-[0_0_16px_hsl(182_100%_50%/0.8)] transition-shadow duration-500" />
                      <div className="absolute w-3.5 h-3.5 rounded-full border border-primary/50 animate-dot-ping" />
                    </div>

                    <h3 className="text-base font-semibold text-primary group-hover:shadow-none transition-all duration-300">
                      {exp.title}
                    </h3>
                    {(exp.company || exp.period) && (
                      <p className="font-mono text-xs text-muted-foreground mt-0.5">
                        {[exp.company, exp.location, exp.period].filter(Boolean).join(" · ")}
                      </p>
                    )}
                    <ul className="mt-3 space-y-2">
                      {exp.bullets.map((b, bi) => (
                        <SectionReveal key={bi} delay={idx * 120 + bi * 80} direction="right">
                          <li className="text-sm text-muted-foreground leading-relaxed flex gap-2 hover:text-foreground transition-colors duration-300">
                            <span className="text-primary mt-1.5 shrink-0 opacity-60">▸</span>
                            {b}
                          </li>
                        </SectionReveal>
                      ))}
                    </ul>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </section>
        </SectionReveal>

        <WaveDivider />

        {/* ═══ EDUCATION ═══ */}
        <SectionReveal>
          <section className="space-y-6">
            <h2 className="font-mono text-xs tracking-[0.25em] uppercase text-primary">
              // Education & Certification
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <SectionReveal delay={0}>
                <div className="rounded-lg border border-border bg-card p-5 space-y-2 hover:border-primary/30 hover:shadow-[0_0_20px_hsl(182_100%_50%/0.08)] transition-all duration-500">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-primary opacity-70">
                    Education
                  </p>
                  <h3 className="text-sm font-semibold text-foreground">
                    Accelerated B.S. + M.S. Information Technology
                  </h3>
                  <p className="text-xs text-muted-foreground">Western Governors University</p>
                  <p className="font-mono text-xs text-muted-foreground">Expected 2028</p>
                </div>
              </SectionReveal>

              <SectionReveal delay={120}>
                <div className="rounded-lg border border-border bg-card p-5 space-y-2 relative overflow-hidden hover:border-primary/30 hover:shadow-[0_0_20px_hsl(182_100%_50%/0.08)] transition-all duration-500 group">
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                  <p className="font-mono text-[10px] uppercase tracking-widest text-primary opacity-70">
                    Certification
                  </p>
                  <h3 className="text-sm font-semibold text-foreground">
                    Music Technology & Composition
                  </h3>
                  <p className="text-xs text-muted-foreground">Los Angeles City College</p>
                </div>
              </SectionReveal>
            </div>
          </section>
        </SectionReveal>

        {/* Footer */}
        <div className="pt-16 pb-8 text-center">
          <SectionReveal direction="fade">
            <div className="w-16 h-px bg-primary/20 mx-auto mb-4" />
            <p className="font-mono text-[10px] text-muted-foreground tracking-widest">
              SIGNAL_OUT // END_OF_RESUME
            </p>
          </SectionReveal>
        </div>
      </div>
    </div>
  );
}
