export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-line/70 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-xs font-bold tracking-[0.18em] text-blue">{eyebrow}</p>
        <h1 className="mt-2 max-w-3xl text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">{title}</h1>
        <div className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">{children}</div>
      </div>
    </section>
  );
}
