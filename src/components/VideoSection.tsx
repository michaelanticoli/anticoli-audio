import React, { useState } from "react";
import { Play, Youtube } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

interface VideoItem {
  title: string;
  description: string;
  youtubeId: string; // YouTube video ID (e.g. "dQw4w9WgXcQ")
  duration?: string;
}

// Replace youtubeId with your real video IDs
const VIDEOS: VideoItem[] = [
  {
    title: "Plugin Walkthrough: Building a Signal Chain",
    description:
      "Step-by-step walkthrough of building a production-ready signal chain using VST plugins in Logic Pro — covering EQ, compression, saturation, and spatial processing.",
    youtubeId: "", // Add your YouTube video ID here
    duration: "12:34",
  },
  {
    title: "Sound Design Tutorial: FM Synthesis from Scratch",
    description:
      "Hands-on tutorial building complex timbres using FM synthesis — demonstrating operator relationships, feedback routing, and envelope modulation.",
    youtubeId: "", // Add your YouTube video ID here
    duration: "8:47",
  },
];

function VideoCard({ video, index }: { video: VideoItem; index: number }) {
  const [active, setActive] = useState(false);
  const hasId = Boolean(video.youtubeId);

  return (
    <SectionReveal delay={index * 100} direction="up">
      <div className="group rounded-lg border border-border bg-card overflow-hidden hover:border-primary/30 hover:shadow-[0_0_24px_hsl(var(--primary)/0.1)] transition-all duration-500">
        {/* Embed area */}
        <div className="relative w-full aspect-video bg-secondary/30">
          {active && hasId ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              {/* Thumbnail via YouTube if we have an ID */}
              {hasId && (
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
              )}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <button
                  onClick={() => hasId && setActive(true)}
                  disabled={!hasId}
                  className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    hasId
                      ? "border-primary text-primary hover:bg-primary/20 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] cursor-pointer"
                      : "border-border text-muted-foreground opacity-40 cursor-not-allowed"
                  }`}
                >
                  <Play className="w-5 h-5 ml-1" />
                </button>
                {!hasId && (
                  <span className="font-mono text-[10px] text-muted-foreground">
                    // add YouTube ID to activate
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-4 space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm font-semibold text-foreground leading-snug">{video.title}</h3>
            <div className="flex items-center gap-1.5 shrink-0">
              {video.duration && (
                <span className="font-mono text-[10px] text-muted-foreground">{video.duration}</span>
              )}
              <Youtube className="w-3.5 h-3.5 text-primary opacity-50" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">{video.description}</p>
        </div>
      </div>
    </SectionReveal>
  );
}

export default function VideoSection() {
  return (
    <section className="space-y-6">
      <h2 className="font-mono text-xs tracking-[0.25em] uppercase text-primary">
        // Video & Tutorials
      </h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {VIDEOS.map((v, i) => (
          <VideoCard key={v.title} video={v} index={i} />
        ))}
      </div>
    </section>
  );
}
