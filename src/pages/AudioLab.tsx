import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, AudioLines } from "lucide-react";

const framework = [
  {
    number: "01",
    title: "Signal Integrity",
    items: [
      "Phase response and stereo image stability",
      "Gain staging predictability",
      "Oversampling impact and noise floor behavior",
      "Gain-matched A/B comparisons",
    ],
  },
  {
    number: "02",
    title: "Harmonic Behavior",
    items: [
      "Odd versus even harmonic emphasis",
      "Tonal density at low, moderate, and heavy drive",
      "How harmonic growth tracks input level",
      "Whether musicality collapses under stress",
    ],
  },
  {
    number: "03",
    title: "Transient Response",
    items: [
      "Attack transparency",
      "Transient rounding versus destruction",
      "Punch retention on drums and percussive material",
      "Microdynamic behavior under repeated hits",
    ],
  },
  {
    number: "04",
    title: "Workflow and UX",
    items: [
      "Parameter clarity and control hierarchy",
      "Preset usefulness",
      "CPU efficiency in real sessions",
      "Visual feedback and modulation usability",
    ],
  },
];

const artifactRows = [
  ["Plugin Category", "Analog-modeled saturation"],
  ["Primary Source", "Stereo drum loop"],
  ["Secondary Source", "Mono vocal phrase"],
  ["Test Focus", "Transient preservation vs harmonic density"],
  ["Method", "Gain-matched low / medium / high drive passes"],
  [
    "Conclusion",
    "Most effective on buses where cohesion is desirable; less effective where sharp transient articulation must remain dominant",
  ],
];

export default function AudioLab() {
  return (
    <div className="min-h-screen bg-black text-white">
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="tracking-[0.2em] uppercase text-sm">
              Michael Anticoli
            </span>
            <span className="text-xs uppercase tracking-[0.18em] text-white/40">
              Sound, Story, Strategy
            </span>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Link>
        </div>
      </motion.header>

      <main className="px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto space-y-6">
          <motion.section
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
          >
            <div className="inline-flex items-center gap-2 mb-6 text-xs uppercase tracking-[0.22em] text-white/45">
              <AudioLines className="w-4 h-4" />
              <span>Audio Lab</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[0.95] mb-6 max-w-4xl">
              Plugin Evaluation Protocol
            </h1>

            <p className="text-base md:text-xl text-white/60 max-w-3xl leading-relaxed">
              A structured framework for evaluating audio plugins across signal
              behavior, perceptual impact, workflow integration, and clear
              communication.
            </p>
          </motion.section>

          <section className="grid lg:grid-cols-[240px_1fr] gap-6">
            <div className="text-xs uppercase tracking-[0.2em] text-white/45 font-medium">
              Philosophy
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl tracking-tight mb-4">
                Audio plugins are signal-shaping instruments.
              </h2>

              <p className="text-white/65 text-base md:text-lg leading-relaxed mb-6 max-w-4xl">
                Modern plugins do more than add effect. They reshape tone,
                transient perception, stereo movement, density, and workflow. A
                rigorous evaluation therefore looks at both technical behavior
                and musical consequence.
              </p>

              <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3">
                {[
                  "Signal Behavior",
                  "Perceptual Impact",
                  "Workflow Integration",
                  "Communication Value",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-medium text-center text-white/88"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="grid lg:grid-cols-[240px_1fr] gap-6">
            <div className="text-xs uppercase tracking-[0.2em] text-white/45 font-medium">
              Testing Environment
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
                <ul className="space-y-3 text-white/70 text-base leading-relaxed">
                  <li>
                    <strong className="text-white font-medium">DAW:</strong>{" "}
                    Logic Pro
                  </li>
                  <li>
                    <strong className="text-white font-medium">Platforms:</strong>{" "}
                    macOS and Windows
                  </li>
                  <li>
                    <strong className="text-white font-medium">Monitoring:</strong>{" "}
                    Studio monitors and headphones
                  </li>
                  <li>
                    <strong className="text-white font-medium">
                      Reference Material:
                    </strong>{" "}
                    Drum loops, vocals, sustained pads, bass tones,
                    transient-heavy percussion
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="grid lg:grid-cols-[240px_1fr] gap-6">
            <div className="text-xs uppercase tracking-[0.2em] text-white/45 font-medium">
              Framework
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {framework.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7"
                >
                  <div className="text-xs uppercase tracking-[0.2em] text-white/45 mb-3">
                    {item.number}
                  </div>

                  <h3 className="text-xl md:text-2xl tracking-tight mb-4">
                    {item.title}
                  </h3>

                  <ul className="space-y-3 text-white/68 text-base leading-relaxed list-disc pl-5">
                    {item.items.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="grid lg:grid-cols-[240px_1fr] gap-6">
            <div className="text-xs uppercase tracking-[0.2em] text-white/45 font-medium">
              Example
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl tracking-tight mb-5">
                  Saturation Plugin Test
                </h3>

                <div className="space-y-5">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-white/35 mb-2">
                      Signal Chain
                    </div>
                    <div className="font-mono text-sm md:text-base text-white/80 rounded-xl border border-white/10 bg-black/30 px-4 py-3">
                      Drum loop → saturation plugin → gain match → bypass
                      comparison
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-white/35 mb-2">
                      Observation
                    </div>
                    <p className="text-white/65 text-base md:text-lg leading-relaxed">
                      Low drive levels introduce subtle harmonic enrichment in
                      the midrange. At higher drive values, transient rounding
                      increases and the signal begins to trade punch for
                      cohesion.
                    </p>
                  </div>

                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-white/35 mb-2">
                      Musical Implication
                    </div>
                    <p className="text-white/65 text-base md:text-lg leading-relaxed">
                      Most effective on buses where adhesive density is desired.
                      Less suitable when aggressive transient preservation is the
                      priority.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
                <h3 className="text-2xl tracking-tight mb-4">Test Artifact</h3>

                <div className="overflow-hidden rounded-2xl border border-white/10">
                  {artifactRows.map(([label, value], index) => (
                    <div
                      key={label}
                      className={`grid md:grid-cols-[220px_1fr] ${index !== artifactRows.length - 1
                        ? "border-b border-white/10"
                        : ""
                        }`}
                    >
                      <div className="bg-white/[0.03] px-4 py-4 text-[11px] uppercase tracking-[0.18em] text-white/40">
                        {label}
                      </div>
                      <div className="px-4 py-4 text-white/78 text-sm md:text-base leading-relaxed">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="grid lg:grid-cols-[240px_1fr] gap-6 pb-10">
            <div className="text-xs uppercase tracking-[0.2em] text-white/45 font-medium">
              Deliverables
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "Build Testing",
                  items: [
                    "Bug identification and reproduction notes",
                    "Cross-platform compatibility checks",
                    "Usability observations from real sessions",
                  ],
                },
                {
                  title: "Documentation",
                  items: [
                    "Clear feature explanations",
                    "Quick-start guides",
                    "Technical reference notes for users",
                  ],
                },
                {
                  title: "User Education",
                  items: [
                    "Workflow tutorials",
                    "Creative use-case breakdowns",
                    "Sound-design examples rooted in practice",
                  ],
                },
              ].map((block) => (
                <div
                  key={block.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7"
                >
                  <h4 className="text-xl tracking-tight mb-4">{block.title}</h4>
                  <ul className="space-y-3 text-white/68 text-base leading-relaxed list-disc pl-5">
                    {block.items.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}