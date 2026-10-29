import { clients } from "@/lib/data";

const styles = [
  "font-serif tracking-wide",
  "font-sans font-light tracking-[0.2em] uppercase",
  "font-serif italic",
  "font-sans font-black tracking-tight uppercase",
  "font-script text-2xl",
  "font-sans font-semibold tracking-[0.14em] uppercase",
];

export function LogoRow() {
  return (
    <section aria-label="Brands PixelForge has worked with" className="py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4 sm:px-6">
        {clients.map((name, index) => (
          <span key={name} className={`text-lg text-ink/35 ${styles[index % styles.length]}`}>
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
