"use client";

import { useMemo, useState } from "react";
import { projectCategories, projects, type Project } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectBrowser() {
  const [category, setCategory] = useState<(typeof projectCategories)[number]>("All");

  const visible = useMemo(
    () => (category === "All" ? projects : projects.filter((project) => project.category === category)),
    [category],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {projectCategories.map((item) => {
          const count =
            item === "All" ? projects.length : projects.filter((project: Project) => project.category === item).length;
          const selected = category === item;
          return (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setCategory(item)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                selected ? "bg-blue text-white" : "bg-white text-ink shadow-sm hover:text-blue"
              }`}
            >
              {item}
              <span className={`ml-1.5 text-xs ${selected ? "text-white/80" : "text-muted"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} layout="detail" />
        ))}
      </div>
    </div>
  );
}
