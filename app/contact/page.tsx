import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { ContactEnquiry } from "@/components/ContactEnquiry";
import { MailIcon, PhoneIcon, PinIcon, ClockIcon } from "@/components/icons";
import { faqs, studio } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact PixelForge in East Legon, Accra. Call 0256 206 383 or 055 314 0985, or send a project note to hello@pixelforge.studio.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="CONTACT" title="Tell me what the website needs to do.">
        The studio is in East Legon. Call, email, or leave a note below. The form checks your details in the browser, then opens an email you can send yourself. Nothing is stored on a server, and there is no payment step.
      </PageHero>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:py-16">
        <div className="space-y-4">
          <article className="rounded-[28px] bg-navy p-6 text-white">
            <h2 className="text-xl font-extrabold">Studio</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-sun" />
                {studio.address}
              </li>
              <li className="flex items-center gap-2">
                <MailIcon className="h-4 w-4 shrink-0 text-sun" />
                <a className="hover:text-white" href={`mailto:${studio.email}`}>
                  {studio.email}
                </a>
              </li>
              {studio.phones.map((phone) => (
                <li key={phone.href} className="flex items-center gap-2">
                  <PhoneIcon className="h-4 w-4 shrink-0 text-sun" />
                  <a className="hover:text-white" href={phone.href}>
                    {phone.display}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4 shrink-0 text-sun" />
                {studio.hours}
              </li>
            </ul>
          </article>

          <article className="rounded-[28px] bg-white p-6 shadow-card">
            <h2 className="text-lg font-extrabold text-ink">Around the studio</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              East Legon sits a short drive from Legon, the airport, and the shops in Osu and Labone where a lot of this work begins. If we meet in person, Lagos Avenue is the simplest pin.
            </p>
            <div className="relative mt-4 h-48 overflow-hidden rounded-2xl bg-blue-soft">
              <div className="absolute top-6 left-8 h-16 w-24 rounded-2xl bg-white/80" />
              <div className="absolute right-6 bottom-8 h-20 w-28 rounded-2xl bg-white/70" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-sun text-ink shadow-card">
                  <PinIcon className="h-5 w-5" />
                </span>
                <p className="mt-2 text-sm font-extrabold text-ink">East Legon</p>
                <p className="text-xs text-muted">Accra, Ghana</p>
              </div>
            </div>
          </article>
        </div>

        <div className="rounded-[28px] bg-white p-5 shadow-card sm:p-7">
          <h2 className="text-2xl font-extrabold text-ink">Project enquiry</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Fields marked by the messages below are required. A Ghana number helps me call you back the same day.
          </p>
          <div className="mt-6">
            <Suspense fallback={<p className="text-sm text-muted">Loading the form…</p>}>
              <ContactEnquiry />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink">Before you write</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faqs.map((item) => (
              <article key={item.question} className="rounded-[24px] border border-line p-5">
                <h3 className="font-extrabold text-ink">{item.question}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
