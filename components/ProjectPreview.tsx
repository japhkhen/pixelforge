import type { ProjectTone } from "@/lib/data";

const tones: Record<
  ProjectTone,
  { shell: string; band: string; card: string; ink: string; muted: string; chip: string }
> = {
  floral: {
    shell: "bg-[#f8efe8]",
    band: "bg-[#e7a08a]",
    card: "bg-white",
    ink: "text-[#3c2a24]",
    muted: "text-[#8a6458]",
    chip: "bg-[#2f6b4f]",
  },
  studio: {
    shell: "bg-[#1b1e27]",
    band: "bg-[#2a3142]",
    card: "bg-[#12151c]",
    ink: "text-white",
    muted: "text-white/60",
    chip: "bg-[#d7b15e]",
  },
  wellness: {
    shell: "bg-[#eef4ec]",
    band: "bg-[#c9ddc4]",
    card: "bg-white",
    ink: "text-[#243028]",
    muted: "text-[#5d7364]",
    chip: "bg-[#7ea184]",
  },
  market: {
    shell: "bg-[#fbf3e4]",
    band: "bg-[#e7c27a]",
    card: "bg-white",
    ink: "text-[#3a2c16]",
    muted: "text-[#8a6a32]",
    chip: "bg-[#c4552a]",
  },
  fashion: {
    shell: "bg-[#f4efe6]",
    band: "bg-[#1e2a4a]",
    card: "bg-[#fbf7f0]",
    ink: "text-[#1e2a4a]",
    muted: "text-[#5c6480]",
    chip: "bg-[#c6a15b]",
  },
  food: {
    shell: "bg-[#fff1e8]",
    band: "bg-[#e07a45]",
    card: "bg-white",
    ink: "text-[#3d2418]",
    muted: "text-[#8d5a40]",
    chip: "bg-[#2f5d50]",
  },
  legal: {
    shell: "bg-[#f3f5f8]",
    band: "bg-[#1c2b45]",
    card: "bg-white",
    ink: "text-[#1c2b45]",
    muted: "text-[#66748c]",
    chip: "bg-[#c6a15b]",
  },
  stay: {
    shell: "bg-[#e7f3f6]",
    band: "bg-[#2f7f93]",
    card: "bg-white",
    ink: "text-[#16343c]",
    muted: "text-[#4d7480]",
    chip: "bg-[#f0c14a]",
  },
};

type ProjectPreviewProps = {
  kicker: string;
  headline: string;
  tone: ProjectTone;
};

export function ProjectPreview({ kicker, headline, tone }: ProjectPreviewProps) {
  const palette = tones[tone];

  return (
    <div className={`flex h-full flex-col ${palette.shell}`}>
      <div className="flex items-center gap-1.5 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#ff6b6b]" />
        <span className="h-2 w-2 rounded-full bg-[#ffc83a]" />
        <span className="h-2 w-2 rounded-full bg-[#49c16b]" />
      </div>
      <div className={`mx-3 rounded-xl px-3 py-4 ${palette.band}`}>
        <p className={`text-[10px] font-bold tracking-[0.14em] uppercase ${tone === "studio" || tone === "legal" || tone === "fashion" ? "text-white/80" : palette.muted}`}>
          {kicker}
        </p>
        <p className={`mt-1 text-sm font-extrabold leading-tight sm:text-base ${tone === "studio" || tone === "legal" || tone === "fashion" ? "text-white" : palette.ink}`}>
          {headline}
        </p>
      </div>
      <div className="grid flex-1 grid-cols-3 gap-2 p-3">
        {[0, 1, 2].map((item) => (
          <div key={item} className={`rounded-lg p-2 ${palette.card}`}>
            <div className={`h-8 rounded-md ${palette.chip} ${item === 1 ? "opacity-80" : "opacity-50"}`} />
            <div className={`mt-2 h-1.5 w-4/5 rounded-full ${tone === "studio" ? "bg-white/30" : "bg-black/10"}`} />
            <div className={`mt-1 h-1.5 w-3/5 rounded-full ${tone === "studio" ? "bg-white/20" : "bg-black/10"}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
