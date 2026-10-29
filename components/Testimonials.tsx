"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { testimonials } from "@/lib/data";
import { ArrowIcon, HeartIcon, StarIcon } from "@/components/icons";

function Stars() {
  return (
    <div className="flex gap-0.5 text-sun" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon key={index} className="h-4 w-4" />
      ))}
    </div>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const visible = [testimonials[index % total], testimonials[(index + 1) % total]];

  return (
    <section id="clients" className="scroll-mt-28 py-12 sm:py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[240px_1fr]">
        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-blue">HAPPY CLIENTS</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Happy Clients.
            <span className="mt-1 flex items-center gap-2 font-script text-[1.15em] font-semibold text-blue">
              Real Results.
              <HeartIcon className="h-7 w-7 text-sun" />
            </span>
          </h2>
          <Link
            href="/about#clients"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-sm font-bold text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-blue hover:text-blue"
          >
            Read more reviews
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>

        <div>
          <div className="grid gap-4 md:grid-cols-2">
            {visible.map((item, cardIndex) => (
              <figure
                key={`${item.name}-${cardIndex}`}
                className={`rounded-[24px] bg-white p-5 shadow-card ${cardIndex === 1 ? "hidden md:block" : ""}`}
              >
                <span className="font-script text-5xl leading-none text-blue/30" aria-hidden="true">
                  “
                </span>
                <blockquote className="text-sm leading-6 text-ink">{item.quote}</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <span>
                    <span className="block text-sm font-bold text-ink">{item.name}</span>
                    <span className="block text-xs text-muted">{item.role}</span>
                  </span>
                  <span className="ml-auto">
                    <Stars />
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-end gap-2">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() => setIndex((value) => (value - 1 + total) % total)}
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-ink transition hover:border-blue hover:text-blue"
            >
              <ArrowIcon className="h-4 w-4 rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Next review"
              onClick={() => setIndex((value) => (value + 1) % total)}
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-ink transition hover:border-blue hover:text-blue"
            >
              <ArrowIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
