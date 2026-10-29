"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowIcon, CheckIcon, CurvedArrow, PlayIcon } from "@/components/icons";
import { IntroModal } from "@/components/IntroModal";

export function Hero() {
  const [introOpen, setIntroOpen] = useState(false);

  return (
    <section className="overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <div className="fade-up">
          <p className="text-xs font-bold tracking-[0.2em] text-blue">FREELANCE WEB DESIGNER</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight text-blue sm:text-5xl lg:text-[3.4rem]">
            Designing Websites
            <br />
            That Inspire
            <span className="mt-1 flex items-center gap-2 text-sun">
              <span className="font-script text-[1.15em] font-semibold">and Shine</span>
              <span className="text-sun">
                <svg viewBox="0 0 36 36" className="h-9 w-9" aria-hidden="true">
                  <circle cx="18" cy="18" r="6" fill="currentColor" />
                  <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M18 4v4M18 28v4M4 18h4M28 18h4M8 8l3 3M25 25l3 3M28 8l-3 3M11 25l-3 3" />
                  </g>
                </svg>
              </span>
            </span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-muted sm:text-lg">
            I design and build calm, useful websites for brands in Accra, so they look considered online and stay easy to use on a phone.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 rounded-full bg-blue px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-deep"
            >
              View My Work
              <ArrowIcon className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() => setIntroOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-sm font-bold text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-blue hover:text-blue"
            >
              <PlayIcon />
              Watch Intro
            </button>
          </div>
          <p className="mt-6 flex items-center gap-3 text-ink">
            <CurvedArrow className="h-10 w-16 text-ink/80" />
            <span className="font-script text-2xl text-blue">Let&apos;s build something amazing together!</span>
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[540px] fade-up" style={{ animationDelay: "120ms" }}>
          <div className="blob absolute -top-4 right-0 h-[78%] w-[82%] bg-sun" />
          <div className="blob absolute bottom-6 left-0 h-28 w-28 bg-blue-soft" />
          <div className="relative z-10 overflow-hidden rounded-[42%_46%_38%_48%/40%_42%_46%_44%] bg-white shadow-card">
            <Image
              src="/images/efua-mensah.jpg"
              alt="Efua Mensah, founder of PixelForge, smiling at her desk with a laptop in Accra"
              width={960}
              height={720}
              priority
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 540px"
            />
          </div>
          <div className="absolute top-6 right-0 z-20 flex items-center gap-3 rounded-2xl bg-white px-3 py-2.5 shadow-card sm:top-10 sm:-right-2 sm:px-4">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-blue text-white">
              <CheckIcon />
            </span>
            <span>
              <span className="block text-xl leading-none font-extrabold text-ink">6+</span>
              <span className="mt-1 block text-xs font-medium text-muted">Years of experience</span>
            </span>
          </div>
        </div>
      </div>
      <IntroModal open={introOpen} onClose={() => setIntroOpen(false)} />
    </section>
  );
}
