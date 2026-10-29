import Link from "next/link";
import { projects } from "@/lib/data";
import { ArrowIcon } from "@/components/icons";
import { ProjectCard } from "@/components/ProjectCard";

export function SelectedWork() {
  const featured = projects.filter((project) => project.featured);

  return (
    <section id="work" className="scroll-mt-28 py-6 sm:py-10">
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-[240px_1fr] lg:gap-10">
        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-blue">SELECTED WORK</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            A few recent favorites
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Every brief is different. These are three Accra projects I was glad to design and ship.
          </p>
          <Link
            href="/projects"
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-ink transition hover:text-blue"
          >
            See all projects
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
