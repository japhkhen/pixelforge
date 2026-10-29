"use client";

import { useEffect, useState } from "react";
import { introSlides } from "@/lib/data";
import { Modal } from "@/components/Modal";

type IntroModalProps = {
  open: boolean;
  onClose: () => void;
};

export function IntroModal({ open, onClose }: IntroModalProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = introSlides[index];

  useEffect(() => {
    if (!open) {
      setIndex(0);
      setPaused(false);
    }
  }, [open]);

  useEffect(() => {
    if (!open || paused) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % introSlides.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [open, paused]);

  return (
    <Modal open={open} onClose={onClose} title="A minute with Efua">
      <p className="text-xs font-bold tracking-[0.16em] text-blue">{slide.kicker}</p>
      <h3 className="mt-2 text-xl font-extrabold text-ink">{slide.title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{slide.text}</p>
      <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-blue-soft">
        <div
          className="h-full rounded-full bg-blue transition-all duration-500"
          style={{ width: `${((index + 1) / introSlides.length) * 100}%` }}
        />
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex gap-2" role="tablist" aria-label="Intro slides">
          {introSlides.map((item, itemIndex) => (
            <button
              key={item.kicker}
              type="button"
              role="tab"
              aria-selected={itemIndex === index}
              aria-label={item.title}
              onClick={() => setIndex(itemIndex)}
              className={`h-2.5 rounded-full transition-all ${itemIndex === index ? "w-6 bg-blue" : "w-2.5 bg-line"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          className="rounded-full border border-line px-3 py-1.5 text-xs font-bold text-ink transition hover:border-blue hover:text-blue"
        >
          {paused ? "Play" : "Pause"}
        </button>
      </div>
    </Modal>
  );
}
