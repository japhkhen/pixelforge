import type { TimelineItem } from "@/lib/data";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative space-y-8 border-l-2 border-blue-soft">
      {items.map((item) => (
        <li key={item.period + item.title} className="relative pl-8">
          <span className="absolute top-1 -left-[9px] h-4 w-4 rounded-full bg-sun ring-4 ring-mist" aria-hidden="true" />
          <p className="text-xs font-bold tracking-[0.14em] text-blue">{item.period.toUpperCase()}</p>
          <div className="mt-1 flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-extrabold text-ink">{item.title}</h3>
            <span className="rounded-full bg-blue-soft px-2 py-0.5 text-[11px] font-bold text-blue">{item.kind}</span>
          </div>
          <p className="text-sm font-semibold text-muted">{item.place}</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{item.detail}</p>
        </li>
      ))}
    </ol>
  );
}
