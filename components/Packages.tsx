import Link from "next/link";
import { packages } from "@/lib/data";
import { ArrowIcon, CheckIcon } from "@/components/icons";

export function Packages() {
  return (
    <section id="packages" className="scroll-mt-28 py-12 sm:py-16">
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-[240px_1fr] lg:gap-10">
        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-blue">SERVICES & PACKAGES</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Simple Packages.
            <span className="mt-1 block font-script text-[1.15em] font-semibold text-blue">Big Impact.</span>
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Starting points for businesses at different stages. I confirm every quote in writing. Nothing is charged on this site.
          </p>
          <ArrowIcon className="mt-4 hidden h-8 w-8 text-ink/30 lg:block" />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.id}
              className={`relative flex flex-col rounded-[26px] bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift ${
                item.featured ? "border-2 border-sun md:-mt-3 md:mb-[-12px]" : "border border-line"
              }`}
            >
              {item.featured ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sun px-3 py-1 text-[11px] font-extrabold tracking-wide text-ink">
                  MOST POPULAR
                </span>
              ) : null}
              <p className="text-xs font-bold tracking-[0.16em] text-blue">{item.name.toUpperCase()}</p>
              <p className="mt-2 text-4xl font-extrabold tracking-tight text-ink">{item.price}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{item.audience}</p>
              <ul className="mt-4 space-y-2 text-sm text-ink">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-0.5 text-blue">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href={`/contact?package=${item.id}`}
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold transition ${
                  item.featured
                    ? "bg-sun text-ink hover:bg-sun-deep"
                    : "border border-line bg-white text-ink hover:border-blue hover:text-blue"
                }`}
              >
                Get Started
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-6xl px-4 text-xs text-muted sm:px-6">
        Prices are in US dollars. Invoices can be discussed in cedis. A catalogue layout is prepared for a payment provider you choose later. PixelForge does not process payments here.
      </p>
    </section>
  );
}
