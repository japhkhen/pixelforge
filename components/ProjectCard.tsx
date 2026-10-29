"use client";

import { useState } from "react";
import Link from "next/link";
import type { Project } from "@/lib/data";
import { ArrowIcon } from "@/components/icons";
import { Modal } from "@/components/Modal";
import { ProjectPreview } from "@/components/ProjectPreview";

export function ProjectCard({
  project,
  layout = "feature",
}: {
  project: Project;
  layout?: "feature" | "detail";
}) {
  const [open, setOpen] = useState(false);

  return (
    <article className="group flex h-full flex-col">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative block w-full overflow-hidden rounded-[22px] text-left shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift"
      >
        <div className="aspect-[16/11] overflow-hidden">
          <div className="h-full transition duration-500 group-hover:scale-[1.03]">
            <ProjectPreview {...project.preview} />
          </div>
        </div>
        <span className="absolute right-3 bottom-3 grid h-9 w-9 place-items-center rounded-full bg-sun text-ink shadow-sm transition group-hover:rotate-45">
          <ArrowIcon className="h-4 w-4" />
        </span>
        <span className="sr-only">View the {project.title} case study</span>
      </button>

      <div className="px-1 pt-3">
        <h3 className="text-base font-extrabold text-ink">{project.title}</h3>
        <p className="text-sm text-muted">{project.category} · {project.location}</p>
        {layout === "detail" ? (
          <>
            <p className="mt-2 text-sm leading-6 text-muted">{project.summary}</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <li key={tech} className="rounded-full bg-blue-soft px-2.5 py-1 text-[11px] font-bold text-blue">
                  {tech}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="mt-3 text-sm font-bold text-blue transition hover:text-blue-deep"
            >
              View case study
            </button>
          </>
        ) : null}
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title={project.title} wide>
        <div className="overflow-hidden rounded-2xl">
          <div className="h-52 sm:h-64">
            <ProjectPreview {...project.preview} />
          </div>
        </div>
        <p className="mt-4 text-xs font-bold tracking-[0.16em] text-blue">
          {project.category.toUpperCase()} · {project.year} · {project.location}
        </p>
        <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>
        <p className="mt-3 text-sm leading-6 text-ink">
          <span className="font-bold">What changed. </span>
          {project.outcome}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li key={tech} className="rounded-full bg-mist px-3 py-1 text-xs font-bold text-ink">
              {tech}
            </li>
          ))}
        </ul>
        <Link
          href={`/contact?package=growth&project=${project.slug}`}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-deep"
        >
          Start a similar project
          <ArrowIcon className="h-4 w-4" />
        </Link>
      </Modal>
    </article>
  );
}
