import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

interface Track {
  title: string;
  description: string;
  src: string; // URL to audio file
  duration: string;
}

// Placeholder tracks — replace src with real URLs
const TRACKS: Track[] = [
  {
    title: "Ambient Study No. 1",
    description: "Layered synthesis & granular texture",
    src: "",
    duration: "3:42",
  },
  {
    title: "Signal Chain Experiment",
    description: "FM + physical modeling hybrid",
    src: "",
    duration: "2:18",
  },
  {
    title: "Cinematic Underscore",
    description: "Orchestral sampling & sound design",
    src: "",
    duration: "4:05",
  },
];

function TrackBar({ progress }: { progress: number }) {
  return (
    <div className="relative h-px w-full bg-border rounded-full overflow-hidden">
      <div
        className="absolute left-0 top-0 h-full bg-primary transition-all duration-100"
        style={{ width: `${progress * 100}%`, boxShadow: "0 0 6px hsl(var(--primary)/0.6)" }}
      />
    </div>
  );
}

function TrackRow({ track, index }: { track: Track; index: number }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio || !track.src) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setProgress(audio.currentTime / (audio.duration || 1));
    const onEnd = () => { setPlaying(false); setProgress(0); };
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnd);
    };
  }, []);

  const hasSrc = Boolean(track.src);

  return (
    <SectionReveal delay={index * 80} direction="up">
      <div className={`group flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:border-primary/30 hover:shadow-[0_0_20px_hsl(var(--primary)/0.08)] transition-all duration-500 ${!hasSrc ? "opacity-50" : ""}`}>
        {track.src && <audio ref={audioRef} src={track.src} preload="none" />}

        {/* Play button */}
        <button
          onClick={toggle}
          disabled={!hasSrc}
          className="shrink-0 w-8 h-8 rounded-full border border-primary/40 flex items-center justify-center text-primary hover:bg-primary/10 hover:shadow-[0_0_12px_hsl(var(--primary)/0.4)] transition-all duration-300 disabled:cursor-not-allowed"
        >
          {playing ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 ml-0.5" />}
        </button>

        {/* Info + bar */}
        <div className="flex-1 min-w-0 space-y-1.5">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-sm font-medium text-foreground truncate">{track.title}</span>
            <span className="font-mono text-[10px] text-muted-foreground shrink-0">{track.duration}</span>
          </div>
          <p className="text-xs text-muted-foreground truncate">{track.description}</p>
          <TrackBar progress={progress} />
        </div>

        <Volume2 className="w-3.5 h-3.5 text-primary/40 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </SectionReveal>
  );
}

export default function AudioPlayerSection() {
  return (
    <section className="space-y-6">
      <div className="flex items-baseline justify-between">
        <h2 className="font-mono text-xs tracking-[0.25em] uppercase text-primary">
          // Audio Samples
        </h2>
        <span className="font-mono text-[10px] text-muted-foreground">click to play</span>
      </div>

      <div className="space-y-3">
        {TRACKS.map((track, i) => (
          <TrackRow key={track.title} track={track} index={i} />
        ))}
      </div>

      <p className="font-mono text-[10px] text-muted-foreground text-center opacity-50">
        // audio files — add src URLs to activate players
      </p>
    </section>
  );
}
