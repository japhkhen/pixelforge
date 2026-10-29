"use client";

import { useEffect, useRef, useState } from "react";
import type { Skill } from "@/lib/data";

export function SkillBars({ skills }: { skills: Skill[] }) {
  const listRef = useRef<HTMLUListElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = listRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true);
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <ul ref={listRef} className="grid gap-5 md:grid-cols-2">
      {skills.map((skill) => (
        <li key={skill.name}>
          <div className="mb-1.5 flex items-baseline justify-between gap-3">
            <span className="text-sm font-bold text-ink">{skill.name}</span>
            <span className="text-sm font-extrabold text-blue">{skill.level}%</span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-blue-soft" role="meter" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100} aria-label={skill.name}>
            <div
              className="h-full rounded-full bg-blue transition-all duration-1000 ease-out"
              style={{ width: visible ? `${skill.level}%` : "0%" }}
            />
          </div>
          <p className="mt-1.5 text-xs text-muted">{skill.note}</p>
        </li>
      ))}
    </ul>
  );
}
