import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SkillBars } from "@/components/SkillBars";
import { Timeline } from "@/components/Timeline";
import { DownloadIcon } from "@/components/icons";
import { skills, studio, testimonials, timeline, values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Meet Efua Mensah, founder of PixelForge in East Legon, Accra. Skills, study at the University of Ghana, and studio experience since 2018.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="ABOUT ME" title="I build the sites Accra businesses actually use.">
        I am Efua Mensah, founder of PixelForge. I design and code websites for people who already care about their craft: florists in Osu, studios in Cantonments, and family businesses that have outgrown a Facebook page.
      </PageHero>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
        <div className="relative">
          <div className="blob absolute -top-3 -left-3 h-full w-full bg-sun/90" />
          <Image
            src="/images/efua-mensah.jpg"
            alt="Efua Mensah, web designer and founder of PixelForge, seated with a laptop"
            width={960}
            height={720}
            className="relative rounded-[32px] shadow-card"
            sizes="(max-width: 1024px) 100vw, 480px"
          />
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.16em] text-blue">THE STUDIO</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink">East Legon, with clients across the city.</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-muted sm:text-base">
            <p>
              PixelForge started in 2022 after four years inside other people’s studios. I wanted a practice small enough that I still write the components myself, and close enough to Accra businesses that I can sit in the shop before I open Figma.
            </p>
            <p>
              I studied Information Technology at the University of Ghana, Legon, then learned the client side of the work at Bloom & Co. in Osu and Northstar Digital in Airport City. English and Twi are the languages I work in day to day.
            </p>
            <p>
              The studio is at {studio.address}. Discovery calls run {studio.hours}. If you would rather talk first, call {studio.phones[0].display} or {studio.phones[1].display}.
            </p>
          </div>
          <a
            href={studio.cv}
            download
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-navy"
          >
            <DownloadIcon />
            Download CV
          </a>
          <p className="mt-2 text-xs text-muted">One-page PDF · Efua Mensah, PixelForge</p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-3 sm:px-6">
          {[
            ["6+", "Years designing and building"],
            ["40+", "Pages and products shipped"],
            ["Accra", "Studio base in East Legon"],
          ].map(([stat, label]) => (
            <div key={label} className="rounded-[24px] bg-mist px-5 py-6">
              <p className="text-3xl font-extrabold text-blue">{stat}</p>
              <p className="mt-1 text-sm font-semibold text-muted">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="scroll-mt-28 mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="text-xs font-bold tracking-[0.18em] text-blue">SKILLS</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink">What I use on a typical build</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
          These are working strengths, not a scoreboard. The bars show where I spend most of a project: the interface, the code, and the words on the page.
        </p>
        <div className="mt-8">
          <SkillBars skills={skills} />
        </div>
      </section>

      <section id="experience" className="scroll-mt-28 bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-bold tracking-[0.18em] text-blue">EXPERIENCE & EDUCATION</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink">From Legon to a studio of my own</h2>
          <div className="mt-8">
            <Timeline items={timeline} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-ink">How I like to work</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="rounded-[24px] bg-white p-5 shadow-card">
              <h3 className="text-lg font-extrabold text-ink">{value.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{value.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="clients" className="scroll-mt-28 bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-bold tracking-[0.18em] text-blue">CLIENT NOTES</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink">What it was like to work together</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {testimonials.map((item) => (
              <figure key={item.name} className="rounded-[24px] border border-line bg-mist p-5">
                <blockquote className="text-sm leading-6 text-ink">{item.longQuote}</blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <Image src={item.image} alt={item.alt} width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
                  <span>
                    <span className="block text-sm font-bold">{item.name}</span>
                    <span className="block text-xs text-muted">{item.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-sun px-5 py-3 text-sm font-bold text-ink transition hover:bg-sun-deep">
            Start a project
          </Link>
        </div>
      </section>
    </>
  );
}
