import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-xs font-bold tracking-[0.18em] text-blue">404</p>
      <h1 className="mt-2 text-4xl font-extrabold text-ink">That page is not on this site.</h1>
      <p className="mt-3 text-muted">The link may be old. The work, the studio story, and the contact form are all still here.</p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/" className="rounded-full bg-blue px-5 py-3 text-sm font-bold text-white">
          Back home
        </Link>
        <Link href="/contact" className="rounded-full bg-sun px-5 py-3 text-sm font-bold text-ink">
          Contact Efua
        </Link>
      </div>
    </section>
  );
}
